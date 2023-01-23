import React, {useEffect, useState} from "react";
import {Base64} from "js-base64";
import ReactMarkdown from 'https://esm.sh/react-markdown@7?bundle'
import {unified} from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

export const TmsReadMe = ({repository}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getReadMe = async () => {
        try {
            const response = await fetch(`https://api.github.com/repos/navikt/${repository}/contents/README.md`);
            const json = await response.json();
            const markdown = await (renderMarkdown(Base64.decode(json.content)))
            setData(markdown.replaceAll("<br>","&nbsp;  "));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getReadMe();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>....Laster...</p>
            ) : <div className={"markdown"}>
                <ReactMarkdown  components={{h1:'h2', h2:'h3',h3:'h4',h4:'h5'}}>{data}</ReactMarkdown>
            </div>
            }
        </div>
    );
}


async function renderMarkdown(content) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkStringify)
        .process(content)
    return String(result)
}