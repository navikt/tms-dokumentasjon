import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {DocData, DocMetaData} from "../../../types/data";
import {GetDocMetadata, GetDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";


interface KonsumereVarselProps {
    docs: DocData
    metaData: DocMetaData
}

export const getStaticProps: GetStaticProps<KonsumereVarselProps> = async (
    context
) => {
    const docs = await GetDocs("tms-varsel-event-gateway")
    const metaData = await GetDocMetadata("tms-varsel-event-gateway")
    return {
        props: {
            docs, metaData
        },
    }
}

const KonsumereVarsel: NextPage<KonsumereVarselProps> = ({docs, metaData}: KonsumereVarselProps) =>
    <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated} parentName={"Varsel"}/>


export default KonsumereVarsel
