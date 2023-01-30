import React from "react";
import Link from "next/link";

interface NavBarProps {
    currentPath: string
}

const Navbar = ({currentPath}: NavBarProps) => {
    return (
        <nav>
            <div className={"navbar left"}>
                <Link href={"/"} className={currentPath == "/" ? "current" : ""}>Min side
                    utvikler-docs </Link>
            </div>
            <div className={"navbar right"}>
                <Link href={"/utkast"} className={currentPath == "/utkast" ? "current" : ""}>Utkast</Link>
                <Link href={"/varsel"}
                      className={currentPath == "/varsel" ? "current" : ""}>Varsler</Link>
                <Link href={"/mikrofrontend"}
                      className={currentPath == "/mikrofrontend" ? "current" : ""}>Mikrofrontend</Link>
                <Link id="kattenmin" href={"/katt"}>Mjau</Link>
            </div>
        </nav>
    )
}

export default Navbar