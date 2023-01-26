import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {UtkastData} from "../../types/data";
import {GetDocs} from "../../lib/docsdata_api";


export const getStaticProps: GetStaticProps<UtkastData> = async (
    context
) => {
    const utkast = await GetDocs("tms-utkast")
    return {
        props: {
            utkast
        },
    }
}

const Utkast: NextPage<UtkastData> = ({utkast}: UtkastData) =>
    (
        <main className={"utkast"}>
            <div dangerouslySetInnerHTML={{__html: utkast.content}} className={"howto"}/>
        </main>
    )


export default Utkast
