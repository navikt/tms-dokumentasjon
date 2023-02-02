import React, {useEffect} from 'react'
import styles from "./HowTo.module.css"

export interface HowToProps {
    content: string
    lastUpdated?: string
}

const HowTo = ({content, lastUpdated}: HowToProps) => {

    useEffect(() => {
        const h1 = document.querySelector("h1")
        const updatedText = `Sist oppdatert: ${lastUpdated}`
        if (lastUpdated) {
            const lastUpdated = document.createElement("p")
            lastUpdated.innerHTML = updatedText
            lastUpdated.style.fontSize = '14px';
            lastUpdated.style.textAlign ='right'
            lastUpdated.style.borderTop = 'black solid 1px'
            lastUpdated.style.marginBottom = '40px'
            lastUpdated.style.paddingTop = '10px'
            lastUpdated.style.color = "var(--text-default)"
            h1.after(lastUpdated)
        }
    }, [])
    return (
        <main>
            <div dangerouslySetInnerHTML={{__html: content}} className={styles.howto}/>
        </main>
    )
}


export default HowTo
