import {DocData} from "../types/data";
import {unified} from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import {Base64} from "js-base64";

export async function GetUtkast(repository: string): Promise<DocData> {
    const response = await fetch(
        `https://api.github.com/repos/navikt/${repository}/contents/howto.md`
    )
    logStatus(response.status, response.statusText,repository)
    const docData: DocData = (await response.json()) as DocData
    const content = await renderMarkdown(Base64.decode(docData.content))

    return {content}
}

async function renderMarkdown(content: string): Promise<string> {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkHtml)
        .process(content)
    return String(result)
}

const logStatus = (status: number, message:string,repo:string) => {
    console.info("----------------Henting av data fra "+ repo+ "---------- \n")
    console.info("status: "+ status + "\n")
    console.info("message: "+ message + "\n")
    console.info("------------------------------------------------------------")
}