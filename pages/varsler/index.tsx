import React from 'react'
import {NextPage} from 'next'
import Link from "next/link";
import styles from "./varsler.module.css"
import {DocData, DocMetaData} from "../../types/data";


export interface VarselUndersideProps {
    docs: DocData
    metaData: DocMetaData
}

const Varsler: NextPage = () => {

    return (
        <main className={styles.undersider}>
            <h1>Varsler</h1>
            <ul>
                <li><Link href={"/varsler/produsere"}>Produsere varsel-hendelser</Link></li>
                <li><Link href={"/varsler/konsumere"}>Konsumere varsel-hendelser</Link></li>
            </ul>
            <h2>Eldre dokumentasjon</h2>
            <ul>
                <li><Link href={"/varsler/produsere-legacy"}>Produsere varsel-hendelser (legacy)</Link></li>
                <li><Link href={"/varsler/builder-legacy"}>Message builder (legacy avro)</Link></li>
                <li><Link href={"/varsler/eksternvarsling"}>Ekstern varsling</Link></li>
                <li><Link href={"/varsler/faq"}>FAQ</Link></li>
                <li><Link href={"/varsler/metrics"}>Metrics</Link></li>
            </ul>
        </main>
    )
}

export default Varsler
