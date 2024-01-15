import React from "react";
import Link from "next/link";

interface NavBarProps {
    currentLocation: string
}

const Navbar = ({currentLocation}: NavBarProps) =>
    <>
        <p>
            Vi har flytta! Oppdatert dokumentasjon finner du på <a
            href="https://navikt.github.io/tms-dokumentasjon/"> Github pages </a>
        </p>
        <nav>
            <div className={"navbar left"}>
                <Link href={"/"} className={currentLocation == "" ? "current" : ""}>Min side
                    utvikler-docs </Link>
            </div>
            <div className={"navbar right"}>
                <Link href={"/innholdsguide"}
                      className={currentLocation == "innholdsguide" ? "current" : ""}>Innholdsguide</Link>
                <Link href={"/utkast"} className={currentLocation == "utkast" ? "current" : ""}>Utkast</Link>
                <Link href={"/varsler"}
                      className={currentLocation == "varsler" ? "current" : ""}>Varsler</Link>
                <Link href={"/mikrofrontend"}
                      className={currentLocation == "mikrofrontend" ? "current" : ""}>Mikrofrontend</Link>
                <Link id="kattenmin" href={"/katt"}>Mjau</Link>
            </div>
        </nav>
    </>

export default Navbar