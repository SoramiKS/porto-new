import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaLinux,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma
} from "react-icons/fa";
import { 
  RiNextjsFill, 
  RiTailwindCssFill,
  RiFirebaseFill 
} from "react-icons/ri";
import { 
  IoLogoJavascript,
} from "react-icons/io";
import { 
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiVercel
} from "react-icons/si";
import { 
  SiMikrotik
} from "react-icons/si";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      color: "neon-text",
      techs: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-white" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "TailwindCSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" }
      ]
    },
    {
      title: "Backend & Tools",
      color: "neon-purple",
      techs: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "Firebase", icon: RiFirebaseFill, color: "text-orange-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-400" }
      ]
    },
    {
      title: "Network & Systems",
      color: "neon-green",
      techs: [
        { name: "Mikrotik RouterOS", icon: SiMikrotik, color: "text-red-500" },
        { name: "Linux", icon: FaLinux, color: "text-yellow-400" },
        { name: "SNMP", icon: FaLinux, color: "text-green-400" }
      ]
    },
    {
      title: "Design & Deploy",
      color: "neon-magenta",
      techs: [
        { name: "Figma", icon: FaFigma, color: "text-pink-500" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "GitHub", icon: FaGithub, color: "text-white" }
      ]
    }
  ];

  return (
    <div className="bg-black bg-opacity-30" id="tech">
      <div className="px-4 md:px-12 lg:px-24 py-20">
        <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="neon-text">Tech</span> <span className="neon-purple">Stack</span>
          </h2>
          
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            The digital arsenal I use to bring ideas to life
          </p>

          {/* Tech Categories */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-card p-8 hover-lift">
                <h3 className={`text-2xl font-bold ${category.color} mb-6 text-center`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      <tech.icon 
                        size={48} 
                        className={`${tech.color} mb-3 transition-all duration-300 group-hover:scale-110`}
                      />
                      <span className="text-sm text-gray-300 text-center font-medium group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold neon-text mb-6">What I Bring to the Table</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="space-y-2">
                  <div className="neon-green text-lg font-bold">Frontend Magic</div>
                  <p className="text-sm">Crafting responsive, interactive UIs that users love</p>
                </div>
                <div className="space-y-2">
                  <div className="neon-purple text-lg font-bold">Backend Wizardry</div>
                  <p className="text-sm">Building robust APIs and server-side solutions</p>
                </div>
                <div className="space-y-2">
                  <div className="neon-magenta text-lg font-bold">Network Alchemy</div>
                  <p className="text-sm">Monitoring, automation, and infrastructure magic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;