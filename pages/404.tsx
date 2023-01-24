import Link from 'next/link'
import Image from "next/image";

export default function FourOhFour() {
    return <>
        <h1>Oups, den her siden fantes visst ikke</h1>
        <Image src={"katt-i-boks.svg"} role={"presentation"} width={500} height={500}/>
        <Link href="/"> Til forsiden</Link>
    </>
}