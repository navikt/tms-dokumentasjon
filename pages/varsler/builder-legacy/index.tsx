import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {GetLegacyDocMetadata, GetLegacyDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";
import {VarselUndersideProps} from "../index";

export const getStaticProps: GetStaticProps<VarselUndersideProps> = async (
    context
) => {
    const docs = await GetLegacyDocs("builder")
    const metaData = await GetLegacyDocMetadata("builder")
    return {
        props: {
            docs, metaData
        },
    }
}

const VarselBuilder: NextPage<VarselUndersideProps> = ({docs, metaData}: VarselUndersideProps) =>
    <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated} parentName={"Varsel"}/>


export default VarselBuilder
