import {NextPage} from 'next'
import Image from "next/image";
import {useDarkMode} from "use-dark-mode-ts";


const IndexPage: NextPage = _ => {

    const isDarkmode = useDarkMode()


    return (
        <main className={"home"}>
            <Image src={isDarkmode ? "katt/katt-pc-dark.svg" : "katt/katt-pc.svg"} alt={"Katt som sitter bak en data"}
                   height={300} width={300}/>
            <p>
                Her finner du teknisk informasjon om hvordan teamet ditt kan få inn innhold på min side.
                Ta gjerne en titt på *sett inn link til axel her* for når og hvordan de forskjellige produktene skal
                brukes
            </p>
        </main>
    )
}

export default IndexPage
