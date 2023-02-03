# tms-dokumentasjon

Dokumentasjon for produsenter til min side. Henter markdown filer fra tms-repoer på github i byggtid.

## Legge inn nye docs fra git repo:

### I repoet du vil legge til:
1. Lag en howto.md fil i repoet
#### Sett opp automatisk regenerering av docs    
1. Kopier [update_docs.yaml](.github/workflows/trigger/update_docs.yaml) og legg den til i workflows-mappa i repoet
2. Legg til ett github token med repo-tilgang  `DOC_TRIGGER_TOKEN` i Settings-> Secrets and variables -> Actions

### I tms-dokumentasjon:
#### Hvis du skal lage en hoved-side:
1. Lag en ny mappe `/pages/<nyside>` 
2. lag en `index.tsx`fil i den nye mappa
3. Se [utkast](pages/utkast/index.tsx) for eksempel på oppsett
4. Legg til link til den nye sida i [NavBar](components/Navbar/Navbar.tsx)

#### Hvis du skal legge til en underside
1. Lag en ny mappe `/pages/<hovedside>/<nyside>`
2. lag en `index.tsx`fil i den nye mappa
3. Se [varsler/konsumere](pages/varsler/konsumere) for eksempel på oppsett
4. Legg til ny link i hovedsiden. Se [varsler](pages/varsler/index.tsx) for eksempel

## Dev-oppsett
1. Lag en `env.local` fil og legg inn `ACCESS_TOKEN` fra github som har tilgang til å lese nav-packages
2. Start applikasjonen med reload for alle filer: `next dev`

### Sjekke output med statiske filer
2. `npm run build:local`

