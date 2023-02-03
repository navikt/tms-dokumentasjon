import React, {useEffect} from 'react'
import styles from "./HowTo.module.css"
import {format, parseISO} from "date-fns";
import {enUS, nb} from "date-fns/locale";

export interface HowToProps {
    content: string
    lastUpdated: string
}

const HowTo = ({content, lastUpdated}: HowToProps) => {
    console.log(typeof lastUpdated)

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
            <div dangerouslySetInnerHTML={{__html: content}} className={styles.howto}/>
        </main>
    )
}

export default HowTo
