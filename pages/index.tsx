import {NextPage} from 'next'
import Image from "next/image";
import {useState} from "react";


const IndexPage: NextPage = _ => {
    const [imgSrc, setIsDarkTheme] = useState("datakatt.svg");


    return (
        <main className={"home"}>
            <Image src={imgSrc} alt={"Katt som sitter bak en data"} height={300} width={300}/>
            <p>
                Her finner du teknisk informasjon om hvordan teamet ditt kan få inn innhold på min side.
                Ta gjerne en titt på *sett inn link til axel her* for når og hvordan de forskjellige produktene skal
                brukes
            </p>
        </main>
    )
}

export default IndexPage
