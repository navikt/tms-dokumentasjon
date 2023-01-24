import Head from 'next/head'
import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {UtkastData} from "../../types/data";
import {GetUtkast} from "../../lib/postdata_api";


export const getStaticProps: GetStaticProps<UtkastData> = async (
    context
) => {
    const utkast =await GetUtkast("tms-utkast")
    const utkastIac = await GetUtkast("min-side-utkast-topic-iac")
    return {
        props: {
            utkast, utkastIac
        },
    }
}

const Utkast: NextPage<UtkastData> = ({utkast,utkastIac}: UtkastData) => {
    return (
        <main>
            <h1>Utkast</h1>
            <p>{utkast.content}</p>
            <p>{utkastIac.content}</p>
        </main>
    )
}

export default Utkast
