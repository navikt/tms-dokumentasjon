import React from "react";
import Link from "next/link";
import styles from "./Underside.module.css"
import {Back} from "@navikt/ds-icons";
import HowTo from "../HowTo/HowTo";

export interface VarselUndersideProps {
    content: string,
    parentPath: string
}

const Underside = ({content, parentPath}: VarselUndersideProps) =>
    <main>
        <div className={styles.tilbakeLink}>
            <Link href={parentPath}> <Back role={"presentation"} className={styles.backIcon}/> Varsler</Link>
        </div>
        <HowTo content={content}/>
    </main>


export default Underside
