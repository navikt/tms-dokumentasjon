# tms-dokumentasjon

Dokumentasjon for produsenter til min side. Henter markdown filer fra tms-repoer på github i byggtid.
Deployer til https://navikt.github.io/tms-dokumentasjon ved push til main
## Legge inn nye docs fra git repo:

### I repoet du vil legge til dokumentasjon fra:
1. Lag en howto.md fil i repoet
2. Kopier [update_docs.yaml](.github/workflows/trigger/update_docs.yaml) og legg den til i workflows-mappa i repoet
3. Legg til ett github token med tilgang til å trigge workflows i tms-dokumentasjon  `DOC_TRIGGER_TOKEN` i Settings-> Secrets and variables -> Actions

### I tms-dokumentasjon:
1. Lag en ny markdown fil `<navn>.md` i [docs](/docs)-mappa
```markdown
# <Overskrift>
{{ external_markdown('https://raw.githubusercontent.com/navikt/<navn-på-repo>/main/howto.md', '') }}
```
2. Legg til filen i [mkdocs.yml](mkdocs.yml)
 ```yaml
   nav:
   - <Navn på side>: <navn>.md
```

## Kjøre lokalt
`mkdocs serve`

