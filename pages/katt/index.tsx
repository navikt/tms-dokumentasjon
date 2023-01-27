import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "./Katt.module.css"


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
        let index = randomIntInRange(0, katter.length)
        while (katter[index].text==randomKatt.text){
            index = randomIntInRange(0,katter.length)
        }
        setRandomKatt(katter[index]);
    }

    useEffect(() => {
        nyKatt()
    }, []);

    return (
        <main className={styles.katt}>
            <h1>Tadda!</h1>
            <p>Du fant en katt som {randomKatt.text}</p>
            <Image src={randomKatt.imgSrc} role={"presentation"} width={400} height={400} alt={""}/>
            <button onClick={()=>nyKatt()}>Gi meg ny katt!</button>
        </main>
    )
}

const randomIntInRange = (min: number, max: number) => {
    let difference = max - min;
    let rand = Math.random();
    return  Math.floor(rand * difference) + min;

}

export default Katt