"use client";

import quotes from '@/app/quotes.json';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {

    var [randomQuote, setRandomQuote] = useState('');

    setTimeout(() => updateQuote(), 10000);

    useEffect(() => {
        updateQuote();
    }, []);

    function updateQuote() {
        const newRandomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[newRandomIndex]);
    }

    return (
        <footer>
            <div className='mx-auto w-full max-w-6xl px-10 py-5 flex flex-col-reverse md:flex-row md:justify-between gap-5 md:gap-none'>
                <div className="relative justify-self-end">
                    <span className='text-2xl font-bold block mb-2'>Here's the thing</span>
                    <p className='italic text-sm text-gray-500 max-w-md'> "{randomQuote}" - Paul</p>
                </div>
                <Link className="px-4 py-2 border rounded-md self-start md:self-end" href="/about-the-archive">About the archive</Link>
            </div>
        </footer>
    );
};

export default Footer;