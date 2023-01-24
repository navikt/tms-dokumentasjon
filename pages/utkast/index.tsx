import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {UtkastData} from "../../types/data";
import {GetUtkast} from "../../lib/docsdata_api";


export const getStaticProps: GetStaticProps<UtkastData> = async (
    context
) => {
    const utkast = await GetUtkast("tms-utkast")
    return {
        props: {
            utkast
        },
    }
}

const Utkast: NextPage<UtkastData> = ({utkast}: UtkastData) =>
    (
        <main>
            <h1>Utkast</h1>
            <div dangerouslySetInnerHTML={{__html: utkast.content}} className={"howto"}/>
        </main>
    )


export default Utkast
