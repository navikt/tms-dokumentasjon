import {DocData, DocMetaData} from "../types/data";
import {Base64} from "js-base64";
import {checkStatus, getAccessToken, renderMarkdown} from "./api_utils";

export async function GetDocs(repository: string): Promise<DocData> {

    const response = await fetchFromRepository(
        `https://api.github.com/repos/navikt/${repository}/contents/howto.md`
    )
    checkStatus(response.status, response.statusText, repository, "markdown dokumentasjon")
    const docData: DocData = (await response.json()) as DocData
    const content = await renderMarkdown(Base64.decode(docData.content))

    return {content}
}

export async function GetDocMetadata(repository: string): Promise<DocMetaData> {

    const response = await fetchFromRepository(`https://api.github.com/repos/navikt/${repository}/commits?path=howto.md`)
    const latestCommit = await response.json()
    checkStatus(response.status, response.statusText, repository,"metadat")
    return {lastUpdated: latestCommit[0].commit.committer.date}
}

export async function GetLegacyDocs(filnavn: string): Promise<DocData> {

    const response = await fetchFromRepository(
        `https://api.github.com/repos/navikt/brukernotifikasjon-docs/contents/docs/${filnavn}.md`
    )
    checkStatus(response.status, response.statusText, filnavn, "legacy dokumentasjon")
    const docData: DocData = (await response.json()) as DocData
    const content = await renderMarkdown(Base64.decode(docData.content))

    return {content}
}

export async function GetLegacyDocMetadata(filnavn: string): Promise<DocMetaData> {

    const response = await fetchFromRepository(`https://api.github.com/repos/navikt/brukernotifikasjon-docs/commits?path=docs/${filnavn}.md`)
    const latestCommit = await response.json()
    checkStatus(response.status, response.statusText, filnavn,"metadat")
    return {lastUpdated: latestCommit[0].commit.committer.date}
}


const fetchFromRepository = (repositoryUrl: string): Promise<Response> => {
    return fetch(
        repositoryUrl,
        {
            headers: new Headers({
                'Authorization': 'Basic ' + getAccessToken(),
                'Content-Type': 'application/json'
            }),

        }
    )
}
