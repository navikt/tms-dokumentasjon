import { NextPage } from 'next'
import Link from "next/link";
import Image from "next/image";


const IndexPage: NextPage = _ => {
  return (
    <main>
      <h1>Min side dokumentasjon</h1>
       <Image src={"datakatt.svg"} alt={"Katt som sitter bak en data"}  height={300} width={300}/>
    </main>
  )
}

export default IndexPage
