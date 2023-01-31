import React from "react";
import Link from "next/link";

interface NavBarProps {
    currentLocation: string
}

const Navbar = ({currentLocation}: NavBarProps) =>
    <nav>
        <div className={"navbar left"}>
            <Link href={"/"} className={currentLocation == "" ? "current" : ""}>Min side
                utvikler-docs </Link>
        </div>
        <div className={"navbar right"}>
            <Link href={"/utkast"} className={currentLocation == "utkast" ? "current" : ""}>Utkast</Link>
            <Link href={"/varsler"}
                  className={currentLocation == "varsler" ? "current" : ""}>Varsler</Link>
            <Link href={"/mikrofrontend"}
                  className={currentLocation == "mikrofrontend" ? "current" : ""}>Mikrofrontend</Link>
            <Link id="kattenmin" href={"/katt"}>Mjau</Link>
        </div>
    </nav>

export default Navbar