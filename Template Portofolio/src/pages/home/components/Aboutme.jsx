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
import { CgVercel } from "react-icons/cg";
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
    <div className="bg-black bg-opacity-50 h-auto" id="about">
      <div className="bg-purple-950 bg-opacity-20 px-8 md:px-52 pb-4 h-auto ">
        <div className="text-focus-in h-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white fadeInUp-animation ">
          About Me
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 h-auto">
          <div className="w-full h-[600px] no-scrollbar">
            <HoverCard
              columns={10}
              containerClassName="h-full w-full fadeInUp-animation text-focus-in "
              maxXrotation={15}
              maxYrotation={15}
              rows={12}
            >
              <div className=" p-3 rounded-xl  bg-opacity-90 h-[500px]  overflow-hidden">
                <div
                  className="rounded-xl cursor-pointer fadeInUp-animation text-focus-in "
                  style={{
                    maxHeight: "500px" /* Atur tinggi maksimal */,
                    overflowY: "auto" /* Menambahkan scroll vertikal */,
                    scrollbarWidth: "none", // Firefox: sembunyikan scrollbar
                    msOverflowStyle: "none",
                  }}
                >
                  <img
                    className="rounded-xl object-cover h-[200px] w-full"
                    src="./asset/img/profile.jpg"
                    alt=""
                  />
                  <h3 className="text-xl font-bold text-white text-center p-4">
                    Emiliano Sebastian Freitas
                  </h3>
                  <p className="p-4 text-[15px]">
                    I am a student at SMK Negeri 2 Yogyakarta who has a high
                    enthusiasm for learning new things. I'm ready to learn what
                    it takes to be better and useful to the company. I have good
                    enough adaptation that I am ready to work under pressure as
                    long as it doesn't disturb my sleep.
                  </p>
                </div>
              </div>
            </HoverCard>
          </div>

          <div className="w-full h-[500px] fadeInUp-animation">
            <div className="pb-5 rounded-xl h-[500px]">
              <div
                className="rounded-xl cursor-pointer fadeInUp-animation text-focus-in overflow-hidden
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar]:overflow-hidden
                [&::-webkit-scrollbar-track]:
                [&::-webkit-scrollbar-track]:rounded-xl
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                [&::-webkit-scrollbar-thumb]:rounded-xl
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                style={{
                  maxHeight: "460px" /* Atur tinggi maksimal */,
                  overflowY: "auto" /* Menambahkan scroll vertikal */,
                }}
              >
                <h3 className="text-xl font-bold text-white text-center p-4">
                  Skills
                </h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 ">
                  <div className="inline-block text-center mx-4 grow">
                    <FaHtml5 size={100} />
                    <span className="block mt-2 text-white">HTML5</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <FaCss3Alt size={100} />
                    <span className="block mt-2 text-white">CSS3</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <FaReact size={100} />
                    <span className="block mt-2 text-white">React</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <RiTailwindCssFill size={100} />
                    <span className="block mt-2 text-white">Tailwind CSS</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <IoLogoJavascript size={100} />
                    <span className="block mt-2 text-white">JavaScript</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <FaBootstrap size={100} />
                    <span className="block mt-2 text-white">Bootstrap</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <FaFigma size={100} />
                    <span className="block mt-2 text-white">Figma</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <IoLogoVercel size={100} />
                    <span className="block mt-2 text-white">Vercel</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <RiNextjsFill size={100} />
                    <span className="block mt-2 text-white">Next.js</span>
                  </div>

                  <div className="inline-block text-center mx-4 grow">
                    <FaNodeJs size={100} />
                    <span className="block mt-2 text-white">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Github repo */}
        <div className=" h-auto rounded-xl justify-items-center">
          <h1 className="flex p-14 text-3xl  w-full justify-center ">
            My Social Media
          </h1>
          <div className="h-[500px] w-full rounded-xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-10">
              {social.map((social, index) => (
                <div className="inline-block text-center mx-4 grow">
                  <a href={social.link}>
                    <social.icon size={100} />
                    <span className="block mt-2 text-white">{social.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-purple-950 to-red-950 pb-52 opacity-20"></div>
    </div>
  );
};

export default About;
