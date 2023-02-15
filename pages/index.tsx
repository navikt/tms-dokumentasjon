import {NextPage} from 'next'
import Image from "next/image";
import {useDarkTheme} from "../lib/theme";


const IndexPage: NextPage = _ => {

    const darkTheme = useDarkTheme()

    return (
        <main className={"home"}>
            <Image src={darkTheme ? "katt/katt-pc-dark.svg" : "katt/katt-pc.svg"}
                   alt={"Katt som sitter bak en data"}
                   height={300} width={300}/>
            <h1>Utvikler docs</h1>
            <p>
                Her finner du teknisk informasjon om hvordan teamet ditt kan få inn innhold på min side.
                Ta gjerne en titt på innholdsguiden før du setter i gang!
            </p>
            <p>
                Se <a
                href="https://aksel.nav.no/god-praksis/artikler/hva-moter-brukerne-som-logger-inn-pa-navno?tema=innholdsarbeid">
                dokumentasjon på Aksel
            </a> for eksempler og mer om hvordan de forskjellige produktene skal brukes.
            </p>
        </main>
    )
}

export default IndexPage