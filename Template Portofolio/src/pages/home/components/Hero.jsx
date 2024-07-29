import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";


const Hero = () => {
    return (
        <section className="bg-blue-100 py-16 px-8 md:px-52 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 text-center justify-center items-center ">
                <img src="/Malenia.png" alt="Malenia Elden Ring" className="border-red-950 border-4 rounded-xl mb-5 w-1/2"/>
                <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-full text-slate-800">
                    Emiliano Sebastiian Freitas
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800">
                    A FrontEnd Web Developer
                </p>
                <p className="text-md md:text-lg lg:text-xl text-slate-500 px-0 md:px-20">
                    I am a student at SMK Negri 2 Yogyakarta who has a high enthusiasm for learning new things. I am ready to learn what is needed to become better and useful for the company. I have good enough adaptation that I am ready to work under pressure as long as it doesn't interfere with my sleep.
                </p>
                <button className="border-[3px] border-slate-800 text-slate-800 font-medium py-2 px-8 rounded-lg w-fit flex gap-2 items-center justify-center hover:scale-110 transition-all">
                    Let's Talk
                    {/* <IoIosArrowDropright size={25} color="black" /> */}
                </button>
            </div>
            <div className="flex gap-3">
                <a href="https://github.com" target="_blank">
                    <FaGithub size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://www.instagram.com/freytaz_/" target="_blank">
                    <FaInstagram size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <FaWhatsapp size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://youtube.com/@soramiks5763?si=8nu587iLt6gSK-CV" target="_blank">
                    <FaYoutube size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://discord.gg/jx2c5B8w" target="_blank">
                    <FaDiscord size={35} className="hover:scale-110 transition-all" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
