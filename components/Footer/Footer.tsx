import React from "react";
import styles from "./Footer.module.css"

const Footer = _ => {
    return (
        <div className={styles.footer}>
            <p id={"slack"}>Min side på slack</p>
            <p>#team-personbruker</p>
            <p>#brukernotifikasjoner</p>
            <p>#utkast</p>
        </div>
    )
}

export default Footer