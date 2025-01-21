import React from "react";
import HoverCard from "../card/hover-effect-card";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaMailBulk,
  FaNodeJs,
  FaReact,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiFillPinterest } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa6";

const About = () => {
  const social = [
    {
      link: "https://www.instagram.com/freytaz_/",
      icon: FaInstagram,
      name: "Instagram",
    },
    {
      link: "https://github.com/SoramiKS",
      icon: FaGithub,
      name: "Github",
    },
    {
      link: "https://www.youtube.com/@soramiks5763",
      icon: FaYoutube,
      name: "Youtube",
    },
    {
      link: "freitas.emiliano1@gmail.com",
      icon: MdEmail,
      name: "Email",
    },
    {
      link: "https://www.facebook.com/anno.salju",
      icon: FiFacebook,
      name: "Facebook",
    },
    {
      link: "https://id.pinterest.com/SoramiKS/",
      icon: AiFillPinterest,
      name: "Pinterest",
    },
    {
      link: "https://open.spotify.com/user/31ee45qzsw6tsi6w5mpqdrqb5vem?si=3356d4d13eda42cc",
      icon: FaSpotify,
      name: "Spotify",
    },
    {
      link: "https://www.tiktok.com/@soramiks",
      icon: FaTiktok,
      name: "Tiktok",
    },
  ];

  return (
    <div className="bg-black bg-opacity-50" id="about">
      <div className="bg-purple-950 bg-opacity-20 px-4 md:px-12 lg:px-24 pb-8 h-auto">
        <div className="text-focus-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card Emiliano */}
            <div className=" rounded-lg p-4 max-w-lg mx-auto">
              <img
                className="rounded-lg w-full h-[200px] object-cover"
                src="./asset/img/profile.jpg"
                alt="Emiliano"
              />
              <h3 className="text-xl font-bold text-white text-center mt-4">
                Emiliano Sebastian Freitas
              </h3>
              <p className="text-gray-300 mt-2 text-sm">
                I am a student at SMK Negeri 2 Yogyakarta who has a high
                enthusiasm for learning new things. I'm ready to learn what it
                takes to be better and useful to the company. I have good enough
                adaptation that I am ready to work under pressure as long as it
                doesn't disturb my sleep.
              </p>
            </div>

            {/* Skills */}
            <div className=" rounded-lg p-4 max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-white text-center mb-4">
                Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="text-center">
                  <FaHtml5 size={60} className="text-red-500 mx-auto" />
                  <span className="block text-sm text-white mt-2">HTML5</span>
                </div>
                <div className="text-center">
                  <FaCss3Alt size={60} className="text-blue-500 mx-auto" />
                  <span className="block text-sm text-white mt-2">CSS3</span>
                </div>
                <div className="text-center">
                  <FaReact size={60} className="text-cyan-500 mx-auto" />
                  <span className="block text-sm text-white mt-2">React</span>
                </div>
                <div className="text-center">
                  <RiTailwindCssFill
                    size={60}
                    className="text-blue-400 mx-auto"
                  />
                  <span className="block text-sm text-white mt-2">
                    Tailwind CSS
                  </span>
                </div>
                <div className="text-center">
                  <IoLogoJavascript
                    size={60}
                    className="text-yellow-400 mx-auto"
                  />
                  <span className="block text-sm text-white mt-2">
                    JavaScript
                  </span>
                </div>
                <div className="text-center">
                  <FaBootstrap size={60} className="text-purple-600 mx-auto" />
                  <span className="block text-sm text-white mt-2">
                    Bootstrap
                  </span>
                </div>
                <div className="text-center">
                  <FaFigma size={60} className="text-pink-500 mx-auto" />
                  <span className="block text-sm text-white mt-2">Figma</span>
                </div>
                <div className="text-center">
                  <IoLogoVercel size={60} className="text-black mx-auto" />
                  <span className="block text-sm text-white mt-2">Vercel</span>
                </div>
                <div className="text-center">
                  <RiNextjsFill size={60} className="text-white mx-auto" />
                  <span className="block text-sm text-white mt-2">Next.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-12">
            <h1 className="text-2xl text-center text-white mb-8">
              My Social Media
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 justify-items-center">
              {social.map((social, index) => (
                <div key={index} className="text-center">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={60} className="mx-auto text-white" />
                    <span className="block mt-2 text-white">{social.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-purple-950 to-red-950 pb-24 opacity-20"></div>
    </div>
  );
};

export default About;
