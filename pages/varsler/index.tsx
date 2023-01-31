import React from 'react'
import {NextPage} from 'next'
import Link from "next/link";

const Varsel: NextPage = () => {

    return (
        <main>
            <ul>
                <li><Link href={"varsler/konsumere"}> Konsumere varsel-hendelser</Link></li>
            </ul>
        </main>
    )
}


export default Varsel
