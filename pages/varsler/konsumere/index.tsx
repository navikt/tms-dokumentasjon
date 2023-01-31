import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {VarselData} from "../../../types/data";
import {GetDocs} from "../../../lib/docsdata_api";
import Underside from "../../../components/Underside/Underside";

export const getStaticProps: GetStaticProps<VarselData> = async (
    context
) => {
    const docs = await GetDocs("tms-varsel-event-gateway")
    return {props: {
            docs
        },
    }
}

const KonsumereVarsel: NextPage<VarselData> = ({docs}: VarselData) =>
        <Underside content={docs.content} parentPath={"/varsler"}/>


export default KonsumereVarsel
