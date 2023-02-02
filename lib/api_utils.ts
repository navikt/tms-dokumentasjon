import {Base64} from "js-base64";
import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export const getAccessToken = (): string => {
    if (!process.env.ACCESS_TOKEN) {
        console.error("env-variabel ACCESS_TOKEN er ikke satt")
        process.exit(-1)
    }
    return Base64.encode(process.env.ACCESS_TOKEN + ":")
}

export const checkStatus = (status: number, message: string, repo: string, contentType:string) => {
    if (status != 200) {
        console.error(`\nKunne ikke hente ${contentType} fra ${repo} \n status: ${status} ${message}\n`)
    } else {
        console.info(`\n **** Henting av ${contentType} fra ${repo}: OK ****`)
    }
}

export const renderMarkdown = async (content: string): Promise<string> => {

    const codeHigligthingOptions = {
        theme: {
            dark: 'material-palenight',
            light: 'github-light'
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