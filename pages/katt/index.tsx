import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Image from "next/image";


interface CatContent {
    imgSrc: string
    text: string
}

const Katt: NextPage = () => {

    const katter: CatContent[] = [
        { imgSrc: "katt/katt-gave.svg", text:"gjemmer seg bak en gave"},
        { imgSrc: "katt/katt-nøste.svg",text:"sitter på ett garnøste"},
        { imgSrc:"katt/katt-utkast.svg",text:"gjemmer seg bak ett ark"},
        {imgSrc:"katt/katt-varsler.svg",text:"gjemmer seg inni en bjelle"}
    ]
    const [randomKatt, setRandomKatt] = useState(katter[0]);

    const nyKatt = () => {
        const current = randomKatt
        let index = randomIntInRange(0, katter.length)
        while (katter[index].text==current.text){
            index = randomIntInRange(0,katter.length)
        }
        setRandomKatt(katter[index]);
    }

    useEffect(() => {
        nyKatt()
    }, []);
    return (
        <main className={"katt"}>
            <h1>Tadda!</h1>
            <p>Du fant en katt som {randomKatt.text}</p>
            <Image src={randomKatt.imgSrc} role={"presentation"} width={500} height={500} alt={""}/>
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