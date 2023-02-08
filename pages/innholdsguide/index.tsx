import {NextPage} from 'next'
import style from "./innholdsguide.module.css"

const Innholdsguide: NextPage = _ => {


    return (
        <main className={style.innholdsguide}>
            <h1>Innholdsguide</h1>
            <div className={style.figma}>
                <p>
                    Usikker på hvilken type innholdet ditt er? <br/>
                    Sjekk ut figma-veilederen vår!
                </p>
                <iframe
                    title={"Figma fil: slik bruker du mine sider-produkter"}
                    height="600"
                    width="600"
                    src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/0dMvVxZCX3esQILTeQH0st/Slik-bruker-du-min-side-produkter?node-id=0%3A1&t=Q6QzCW8T4dO4heBs-0"
                    allowFullScreen
                />
            </div>
        </main>
    )
}

export default Innholdsguide