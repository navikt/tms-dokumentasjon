import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {MikrofrontendData} from "../../types/data";
import {GetDocs} from "../../lib/docsdata_api";
import HowTo from "../../components/HowTo/HowTo";


export const getStaticProps: GetStaticProps<MikrofrontendData> = async () => {
    const mikrofrontend = await GetDocs("tms-mikrofrontend-selector")
    return {
        props: {
            mikrofrontend
        },
    }
}

const Mikrofrontend: NextPage<MikrofrontendData> = ({mikrofrontend}: MikrofrontendData) =>
    <HowTo content={mikrofrontend.content}/>


export default Mikrofrontend
