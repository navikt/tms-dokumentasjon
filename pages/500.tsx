import Link from 'next/link'
import Image from "next/image";

export default function FiveOhFive() {
    return <main>
        <h1>Oups, det her gikk sånn passe..</h1>
        <Image src={"katt/500-katt.svg"} role={"presentation"} width={500} height={500} alt={""}/>
        <div><Link href="/"> Til forsiden</Link></div>
    </main>
}