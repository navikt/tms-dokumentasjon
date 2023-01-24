import { NextPage } from 'next'
import Image from "next/image";


const IndexPage: NextPage = _ => {
  return (
    <main className={"home"}>
      <h1>Min side utvikler-docs</h1>
       <Image src={"datakatt.svg"} alt={"Katt som sitter bak en data"}  height={300} width={300}/>
        <p>
          Her finner du teknisk informasjon om hvordan teamet ditt kan få inn innhold på min side.
          Ta gjenre en titt på **sett inn link til Aksel dokumentasjon** sånn at du bruker det riktg
        </p>
    </main>
  )
}

export default IndexPage
