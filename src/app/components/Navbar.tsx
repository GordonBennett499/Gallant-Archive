"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {

    const [buttonText, setButtonText] = useState("Does Paul have a job?");
    const checkJob = () => {
        setButtonText("No.");
        setTimeout(() => {
            setButtonText("Does Paul have a job?");
        }, 2000);
    }

    return (
        <header className="relative mx-auto w-full max-w-6xl px-10 py-5 flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
            <Link href="/" className="text-3xl font-bold tracking-wide">Gallant Archive</Link>
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
                <div className="flex flex-col md:flex-row gap-4 items-center border rounded-md py-2 px-3">
                    <Link href="/about" className="hover:underline underline-offset-3 underline-width-2">About Paul</Link>
                </div>
                <button onClick={checkJob} className="bg-violet-400 text-white px-4 py-2 rounded-md cursor-pointer">{buttonText}</button>
            </div>
        </header>
    );

}

export default NavBar;