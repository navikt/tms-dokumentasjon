import type {AppProps} from 'next/app'
import Head from "next/head";
import {useRouter} from "next/router";
import {ThemeProvider} from "next-themes";
import {useDarkTheme} from "../lib/theme";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../styles.css"

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
                    <Navbar currentPath={currentPath}/>
                    <Component {...pageProps} />
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default MyApp