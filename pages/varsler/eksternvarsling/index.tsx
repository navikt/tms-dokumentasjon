import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import Underside from "../../../components/Underside/Underside";
import {GetLegacyDocMetadata, GetLegacyDocs} from "../../../lib/docsdata_api";
import {VarselUndersideProps} from "../index";

export const getStaticProps: GetStaticProps<VarselUndersideProps> = async (
    context
) => {
    const docs = await GetLegacyDocs("eksternvarsling")
    const metaData = await GetLegacyDocMetadata("eksternvarsling")
    return {
        props: {
            docs, metaData
        },
    }
}

const EksterneVarsel: NextPage<VarselUndersideProps> = ({docs, metaData}: VarselUndersideProps) =>
    <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated} parentName={"Varsel"}/>


export default EksterneVarsel
