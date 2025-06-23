"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {

    const [buttonText, setButtonText] = useState("Has Paul got a job?");
    const checkJob = () => {
        setButtonText("No.");
        setTimeout(() => {
            setButtonText("Has Paul got a job?");
        }, 2000);
    }

    return (
        <header className="relative mx-auto w-full max-w-6xl px-10 py-5 flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
            <Link href="/" className="text-3xl font-bold tracking-wide">Gallant Archive</Link>
            <button className="bg-violet-400 text-white px-4 py-2 rounded-md cursor-pointer" onClick={checkJob}>{buttonText}</button>
        </header>
    );

}

export default NavBar;