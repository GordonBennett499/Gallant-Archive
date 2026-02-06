"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function Accordion({ title, description, children, ...params }: AccordionProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-md p-4 pt-3 my-5">
            <div className="cursor-pointer flex flex-row justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <h3 className="text-xl font-bold mb-0">{title}</h3>
                    {description && <p className="text-sm mt-1">{description}</p>}
                </div>
                <ChevronDown size="32" className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={isOpen ? "block mt-3" : "hidden"}>{children}</div>
        </div>
    );

}