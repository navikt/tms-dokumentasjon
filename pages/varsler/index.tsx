import React from 'react'
import {NextPage} from 'next'
import Link from "next/link";
import styles from "./varsler.module.css"

const Varsler: NextPage = () => {

    return (
        <main className={styles.undersider}>
            <h1>Varsler</h1>
            <ul >
                <li><Link href={"varsler/konsumere"}> Konsumere varsel-hendelser</Link></li>
            </ul>
        </main>
    )
}


export default Varsler
