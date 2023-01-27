import type {AppProps} from 'next/app'
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";
import "../styles.css"
import {ThemeProvider} from "next-themes";
import Footer from "../components/Footer";
import {useDarkTheme} from "../lib/theme";

const MyApp = ({Component, pageProps}: AppProps) => {
    const currentPath = useRouter().pathname
    const pathName = currentPath.length == 1 ? "" : currentPath.replace("/", " – ")
    const pagename = "Min side docs " + pathName
    const darkTheme = useDarkTheme()

    return (
        <ThemeProvider>
            <div className={darkTheme?"darktheme":"lightheme"}>
                <Head>
                    <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"/>
                    <title>{pagename}</title>
                </Head>
                <div className={"container"}>
                    <nav>
                        <div className={"navbar left"}>
                            <Link href={"/"} className={currentPath == "/" ? "current" : ""}>Min side
                                utvikler-docs </Link>
                        </div>
                        <div className={"navbar right"}>
                            <Link href={"/utkast"} className={currentPath == "/utkast" ? "current" : ""}>Utkast</Link>
                            <Link href={"/varsler"}
                                  className={currentPath == "/varsler" ? "current" : ""}>Varsler</Link>
                            <Link href={"/mikrofrontend"}
                                  className={currentPath == "/mikrofrontend" ? "current" : ""}>Mikrofrontend</Link>
                            <Link id="kattenmin" href={"/katt"}>Katt</Link>
                        </div>
                    </nav>
                    <Component {...pageProps} />
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default MyApp