import {NextPage} from "next";
import React from "react";
import Image from "next/image";

const Katt: NextPage = () => {
    const katter = [ "katt-i-boks.svg","500-katt.svg","datakatt.svg",]
    const randomkatt = katter[0]
    return (
        <main className={"Mikrofrontend"}>
            <h1>Tadda! Du fant en en katt</h1>
            <Image src={randomkatt} role={"presentation"} width={500} height={500} alt={""}/>
        </main>
    )
}



export default Katt