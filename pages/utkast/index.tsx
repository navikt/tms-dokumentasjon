import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {GetDocs, GetDocMetadata} from "../../lib/docsdata_api";
import HowTo from "../../components/HowTo/HowTo";
import {DocData, DocMetaData} from "../../types/data";

export interface UtkastProps {
    docData: DocData,
    docMetaData: DocMetaData
}

export const getStaticProps: GetStaticProps<UtkastProps> = async () => {
    const docData = await GetDocs("tms-utkast")
    const docMetaData = await GetDocMetadata("tms-utkast")
    return {
        props: {
            docData, docMetaData
        },
    }
}

const Utkast: NextPage<UtkastProps> = ({docData, docMetaData}: UtkastProps) =>
    <HowTo content={docData.content} lastUpdated={docMetaData.lastUpdated}/>

export default Utkast
