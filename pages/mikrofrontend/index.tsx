import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {MikrofrontendData} from "../../types/data";
import {GetDocs} from "../../lib/docsdata_api";


export const getStaticProps: GetStaticProps<MikrofrontendData> = async (
    context
) => {
    const mikrofrontend = await GetDocs("tms-mikrofrontend-selector")
    return {
        props: {
            mikrofrontend
        },
    }
}

const Mikrofrontend: NextPage<MikrofrontendData> = ({mikrofrontend}: MikrofrontendData) =>
    (
        <main className={"Mikrofrontend"}>
            <h1>Utkast</h1>
            <div dangerouslySetInnerHTML={{__html: mikrofrontend.content}} className={"howto"}/>
        </main>
    )


export default Mikrofrontend
