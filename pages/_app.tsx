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
                <title>Min side docs {"\n"+currentPath.replace("/"," – ")}</title>
            </Head>
            <nav className={"navbar"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/utkast"}>Utkast</Link>
                <Link href={"/varsler"}>Varsler</Link>
                <Link href={"/mikrofrontend"}>Mikrofrontend</Link>
            </nav>
            <Component {...pageProps} />
        </div>)
}

export default MyApp