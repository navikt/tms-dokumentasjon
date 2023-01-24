import Head from 'next/head'
import { NextPage } from 'next'
import Link from "next/link";



const IndexPage: NextPage = _ => {
  return (
    <main>
      <Head>
        <title>Docs</title>
      </Head>
      <h1>Min side dokumentasjon</h1>
        <Link href={"/utkast"}>Utkast</Link>
    </main>
  )
}

export default IndexPage
