import Link from 'next/link'
import Image from "next/image";

export default function FourOhFour() {
    return <>
        <h1>Oups, den her sida har vi ikke laga enda</h1>
        <Image src={"katt-i-boks.svg"} role={"presentation"} width={500} height={500} alt={""}/>
        <div><Link href="/"> Til forsiden</Link></div>
    </>
}