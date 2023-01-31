import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {UtkastData} from "../../types/data";
import {GetDocs} from "../../lib/docsdata_api";
import HowTo from "../../components/HowTo/HowTo";

export const getStaticProps: GetStaticProps<UtkastData> = async () => {
    const utkast = await GetDocs("tms-utkast")
    return {
        props: {
            utkast
        },
    }
}

const Utkast: NextPage<UtkastData> = ({utkast}: UtkastData) =>
    <HowTo content={utkast.content}/>

export default Utkast
