import React from "react";
import Link from "next/link";
import styles from "./Underside.module.css"
import {Back} from "@navikt/ds-icons";
import HowTo from "../HowTo/HowTo";

export interface UndersideProps {
    content: string,
    parentPath: string,
    lastUpdated: string,
    parentName: string
}

const  Underside = ({content, parentPath, lastUpdated, parentName}: UndersideProps) =>
    <main>
        <div className={styles.tilbakeLink}>
            <Link href={parentPath}> <Back role={"presentation"} className={styles.backIcon}/> {parentName}</Link>
        </div>
        <HowTo content={content} lastUpdated={lastUpdated}/>
    </main>


export default Underside
