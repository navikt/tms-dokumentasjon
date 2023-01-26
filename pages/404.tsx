import Link from 'next/link'
import Image from "next/image";

export default function FourOhFour() {
    return <main>
        <h1>Oups, det her gikk sånn jo passe.</h1>
        <Image src={"500-katt.svg"} role={"presentation"} width={500} height={500} alt={""} className={"katt"}/>
        <div><Link href="/"> Til forsiden</Link></div>
    </main>
}