import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Image from "next/image";

const Katt: NextPage = () => {

    const katter = ["katt-gave.svg", "katt-nøste.svg", "katt-utkast.svg", "katt-varsler.svg"]
    const [randomKatt, setRandomKatt] = useState("katt/katt-gave.svg");

    const nyKatt = () => {
        const index = randomIntInRange(0, katter.length)
        setRandomKatt("katt/" + katter[index]);
    }

    useEffect(() => {
        const index = randomIntInRange(0, katter.length)
        setRandomKatt("katt/" + katter[index]);
    }, []);
    return (
        <main className={"katt"}>
            <h1>Tadda! Du fant en katt</h1>
            <Image src={randomKatt} role={"presentation"} width={500} height={500} alt={""}/>
            <button onClick={()=>nyKatt()}>Gi meg ny katt!</button>
        </main>
    )
}

const randomIntInRange = (min: number, max: number) => {
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
}

export default Katt