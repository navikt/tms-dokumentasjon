import type {AppProps} from 'next/app'
import Head from "next/head";
import {useRouter} from "next/router";
import {ThemeProvider} from "next-themes";
import {useDarkTheme} from "../lib/theme";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles.css"

const Home = ({Component, pageProps}: AppProps) => {
    const currentPath = useRouter().pathname
    const location = currentPath.length == 1 ? "" : currentPath.split("/")[1]
    const pathName = currentPath.length == 1 ? "" : " — " + location

    const pagename = "Min side docs " + pathName
    const darkTheme = useDarkTheme()

    return (
        <ThemeProvider>
            <div className={darkTheme ? "darktheme" : "lightheme"}>
                <Head>
                    <link rel="shortcut icon" href="/favicon-kattefjes.svg" type="image/svg+xml"/>
                    <title>{pagename}</title>
                </Head>
                <div className={"container"}>
                    <Navbar currentLocation={location}/>
                    <Component {...pageProps} />
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default Home

