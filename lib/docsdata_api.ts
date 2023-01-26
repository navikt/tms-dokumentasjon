import {DocData} from "../types/data";
import {unified} from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from 'remark-parse'
import {Base64} from "js-base64";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";


export async function GetDocs(repository: string): Promise<DocData> {
    const accessToken = Base64.encode(process.env.ACCESS_TOKEN + ":")
    const response = await fetch(
        `https://api.github.com/repos/navikt/${repository}/contents/howto.md`,
        {
            headers: new Headers({
                'Authorization': 'Basic ' + accessToken,
                'Content-Type': 'application/json'
            }),

        }
    )
    checkStatus(response.status, response.statusText, repository)
    const docData: DocData = (await response.json()) as DocData
    const content = await renderMarkdown(Base64.decode(docData.content))

    return {content}
}

async function renderMarkdown(content: string): Promise<string> {

    const codeHigligthingOptions = {
        theme: {
            dark: 'material-palenight',
            light: 'material-lighter'
        },
        keepBackground: true
    }
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypePrettyCode, codeHigligthingOptions)
        .use(rehypeStringify)
        .process(content)
    return String(result)
}

const checkStatus = (status: number, message: string, repo: string) => {
    console.info("\n ----\t Henting av data fra " + repo + " ------")
    if (status != 200) {
        console.error("Kunne ikke hente dokumentasjon fra ${repo} \n status: ${status} ${message} ")
        throw new Error(`Kunne ikke hente dokumentasjon fra ${repo}. Se bygglog for feilmelding`)
    } else {
        console.info(message)
    }
    console.info("---------------------------------")
}