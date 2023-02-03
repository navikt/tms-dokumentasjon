import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {DocData, DocMetaData} from "../../types/data";
import {GetDocs, GetDocMetadata} from "../../lib/docsdata_api";
import HowTo from "../../components/HowTo/HowTo";



export interface MikrofrontendProps {
    docData: DocData,
    docMetaData: DocMetaData
}

export const getStaticProps: GetStaticProps<MikrofrontendProps> = async () => {
    const docData = await GetDocs("tms-mikrofrontend-selector")
    const docMetaData = await GetDocMetadata("tms-mikrofrontend-selector")
    return {
        props: {
            docData,docMetaData
        },
    }
}

const Mikrofrontend: NextPage<MikrofrontendProps> = ({docData, docMetaData}: MikrofrontendProps) =>
    <HowTo content={docData.content} lastUpdated={docMetaData}/>


export default Mikrofrontend
