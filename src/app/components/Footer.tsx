import quotes from '@/app/quotes.json';

const Footer = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return (
        <footer className='relative mx-auto w-full max-w-6xl px-10 py-5 justify-self-end'>
            <span className='text-2xl font-bold block mb-2'>Here's the thing</span>
            <p className='italic text-sm text-gray-500 max-w-md'> "{randomQuote.quote}" - Paul</p>
        </footer>
    );
};

export default Footer;