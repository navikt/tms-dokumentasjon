import React from 'react'
import styles from "./HowTo.module.css"

export interface HowToProps {
    content: string
}

const HowTo = ({content}: HowToProps) =>
    <main>
        <div dangerouslySetInnerHTML={{__html: content}} className={styles.howto}/>
    </main>

export default HowTo
