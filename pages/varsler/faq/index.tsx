import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {GetLegacyDocMetadata, GetLegacyDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";
import {VarselUndersideProps} from "../index";


export const getStaticProps: GetStaticProps<VarselUndersideProps> = async (
    context
) => {
    const docs = await GetLegacyDocs("faq")
    const metaData = await GetLegacyDocMetadata("faq")
    return {
        props: {
            docs, metaData
        },
    }
}

const VarselFaq: NextPage<VarselUndersideProps> = ({docs, metaData}: VarselUndersideProps) =>
    <div>
        <Underside content={docs.content} parentPath={"/varsler"} lastUpdated={metaData.lastUpdated}
                   parentName={"Varsel"}/>
    </div>

export default VarselFaq
