import {NextPage} from 'next'
import Image from "next/image";


const IndexPage: NextPage = _ => {
    return (
        <main className={"home"}>
            <Image src={"datakatt.svg"} alt={"Katt som sitter bak en data"} height={300} width={300}/>
            <p>
                Her finner du teknisk informasjon om hvordan teamet ditt kan få inn innhold på min side.
                Ta gjerne en titt på *sett inn link til axel her* for når og hvordan de forskjellige produktene skal brukes
            </p>
        </main>
    )
}

export default IndexPage
