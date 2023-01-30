import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {VarselData} from "../../../types/data";
import {GetDocs} from "../../../lib/docsdata_api";

export const getStaticProps: GetStaticProps<VarselData> = async (
    context
) => {
    const docs = await GetDocs("tms-varsel-event-gateway")
    return {
        props: {
            docs
        },
    }
}

const KonsumereVarsel: NextPage<VarselData> = ({docs}: VarselData) => {

    return (
        <main>
            <div dangerouslySetInnerHTML={{__html: docs.content}} className={"howto"}/>
        </main>
    )
}


export default KonsumereVarsel
