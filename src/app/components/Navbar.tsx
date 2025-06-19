import Link from "next/link";

const NavBar = () => {

    return (
        <header className='relative mx-auto w-full max-w-6xl px-10 py-5 flex flex-row'>
            <Link href="/" className="text-3xl font-bold tracking-wide">Gallant Archive</Link>
        </header>
    );

}

export default NavBar;