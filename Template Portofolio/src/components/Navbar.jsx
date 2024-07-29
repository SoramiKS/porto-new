import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="py-5 px-16 top-0 z-50 w-full bg-black">
            <div className="flex items-center justify-between">
                
                <a className="navbar-brand flex items-center" href="">
                    <img src="Malenia.png" alt="nazlahevin" className="w-[100px]" />
                    <span className="hover:underline text-white font-bold ml-2">Freytaz</span>
                </a>
                <GiHamburgerMenu
                    onClick={() => setOpen(!isOpen)}
                    className="block text-white size-10 rounded-full p-2 cursor-pointer hover:bg-white-300 md:hidden"
                />

                <ul className="hidden md:flex gap-x-8 text-white font-bold">
                    <li>
                        <a href="/" className="underline-offset-4 hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about-me" className="underline-offset-4 hover:underline">
                            About Me
                        </a>
                    </li>
                </ul>
            </div>
            {isOpen && (
                <ul className="flex pt-6 gap-y-4 md:hidden flex-col gap-x-8 text-white font-bold">
                    <li>
                        <a href="/" className="underline-offset-4 hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about-us" className="underline-offset-4 hover:underline">
                            About Us
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
