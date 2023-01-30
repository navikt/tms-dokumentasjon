import Link from 'next/link'
import Image from "next/image";

export default function FourOhFour() {
    return <main className={"errorkatt"}>
        <h1>Oups, her var det visst ingenting </h1>
        <Image src={"katt/404-katt.svg"} role={"presentation"} width={320} height={320} alt={""} />
        <div><Link href="/"> Til forsiden</Link></div>
    </main>
}