FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
ARG NPM_TOKEN

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json*  ./
COPY .npmrc ./
RUN echo "//npm.pkg.github.com/:_authToken=$NPM_TOKEN" >> .npmrc
RUN cat .npmrc
RUN npm ci;


# Rebuild the source code only when needed
FROM node:16-alpine AS builder
ARG READ_TOKEN
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN ls

ENV NEXT_TELEMETRY_DISABLED 1
ENV ACCESS_TOKEN=$READ_TOKEN
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
ARG READ_TOKEN


ENV NODE_ENV production
ENV ACCESS_TOKEN=$READ_TOKEN
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN ls

USER nextjs

EXPOSE 3000
RUN echo "accesstoken:$ACCESS_TOKEN"

CMD ["node", "server.js"]