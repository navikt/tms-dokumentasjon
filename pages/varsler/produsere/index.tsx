import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {GetDocMetadata, GetDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";
import {VarselUndersideProps} from "../index";

export const getStaticProps: GetStaticProps<VarselUndersideProps> = async (
    context
) => {
    const docs = await GetDocs("tms-varsel-authority")
    const metaData = await GetDocMetadata("tms-varsel-authority")
    return {
        props: {
            docs, metaData
        },
    }
}

const VarselProdusere: NextPage<VarselUndersideProps> = ({docs, metaData}: VarselUndersideProps) =>
    <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated} parentName={"Varsel"} wide/>


export default VarselProdusere
