import type {AppProps} from 'next/app'
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";
import "../styles.css"

const MyApp = ({Component, pageProps}: AppProps) => {
    const currentPath = useRouter().pathname


    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"/>
                <title>Min side docs {"\n" + currentPath.replace("/", " – ")}</title>
            </Head>
            <div className={"container"}>
                <nav>
                    <div className={"navbar left"}>
                        <Link href={"/"} className={currentPath == "/" ? "current" : ""}>Min side utvikler-docs </Link>
                    </div>
                    <div className={"navbar right"}>
                        <Link href={"/utkast"} className={currentPath == "/utkast" ? "current" : ""}>Utkast</Link>
                        <Link href={"/varsler"} className={currentPath == "/varsler" ? "current" : ""}>Varsler</Link>
                        <Link href={"/mikrofrontend"}
                              className={currentPath == "/mikrofrontend" ? "current" : ""}>Mikrofrontend</Link>
                    </div>
                </nav>
                <Component {...pageProps} />
            </div>
            <div className={"footer"}>
                <p>Min side på slack</p>

                <p>#team-personbruker</p>
                <p>#brukernotifikasjoner</p>
                <p>#utkast</p>
            </div>
        </div>)
}

export default MyApp