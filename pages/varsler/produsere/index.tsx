import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {GetDocMetadata, GetDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";
import {VarselUndersideProps} from "../index";

export const getStaticProps: GetStaticProps<VarselUndersideProps> = async (
    context
) => {
    const docs = await GetDocs("dittnav-brukernotifikasjonbestiller")
    const metaData = await GetDocMetadata("dittnav-brukernotifikasjonbestiller")
    return {
        props: {
            docs, metaData
        },
    }
}

const VarselProdusere: NextPage<VarselUndersideProps> = ({docs, metaData}: VarselUndersideProps) =>
    <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated} parentName={"Varsel"}/>


export default VarselProdusere
