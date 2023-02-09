import React, {useEffect} from 'react'
import styles from "./HowTo.module.css"
import {format, parseISO} from "date-fns";
import {enUS, nb} from "date-fns/locale";

export interface HowToProps {
    content: string
    lastUpdated: string,
    wide?: boolean
}

const HowTo = ({content, lastUpdated, wide}: HowToProps) => {
    const classnameString = wide? `${styles.howto} ${styles.wide}`:`${styles.howto}`
    console.log(wide)
    console.log(classnameString)

    useEffect(() => {
        const h1 = document.querySelector("h1")!!
        const date = parseISO(lastUpdated)
        const dateLocales = {nb: nb, en: enUS}


        const updatedText = `Oppdatert: ${format(
            date,
            'd. MMMM yyy',
            {locale: dateLocales.nb}
        )}`
        const oldDateP = document.querySelector(".last-updated")
        if (oldDateP) {
            oldDateP.remove()
        }
        const dateP = document.createElement("p")
        dateP.innerHTML = updatedText.toUpperCase()
        dateP.classList.add("last-updated")
        h1.after(dateP)

    }, [])

    return (
        <main>
            <div dangerouslySetInnerHTML={{__html: content}} className={classnameString}/>
        </main>
    )
}

export default HowTo
