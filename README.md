# tms-dokumentasjon

Dokumentasjon for produsenter til min side. Henter markdown filer fra tms-repoer på github i byggtid.

## Legge inn nye docs fra git repo:

1. Lag en howto.md fil i repoet
2. Se utkastmappa for eksempel på oppsett
3. Om du lager en ny underside: legg til link i _app.tsx

## Om du har oppdatert ett doc:
Bygg og deploy appen på nytt i github actions

## Oppsett
1. Lag en env.local fil og legg inn `ACCESS_TOKEN` fra github
2. Bygg prosjektet slik at de eksterne doc-filene blir hentet inn: `npm run build:export`
3. Start applikasjonen: `next`

