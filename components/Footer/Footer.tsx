import React from "react";
import styles from "./Footer.module.css"

const Footer = () =>
    <div className={styles.footer}>
        <section>
            <h2 id={"slack"}>Min side på slack</h2>
            <a href={"https://nav-it.slack.com/archives/C9CJ794PP"}>#team-personbruker</a>
            <a href={"https://nav-it.slack.com/archives/CR61BPH7G"}>#brukernotifikasjoner</a>
            <a href={"https://nav-it.slack.com/archives/C04E3K5MMMY"}>#utkast</a>
        </section>
    </div>


export default Footer