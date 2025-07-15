import React, { useEffect, useState } from "react";

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Jokimil",
      description: "Wuthering Waves Game Boost Service Website with WhatsApp integration",
      link: "https://jokimil.vercel.app",
      img: "./asset/img/jokimil.png",
      tech: ["React", "Next.js", "WhatsApp API", "TailwindCSS"],
      status: "Live"
    },
    {
      title: "Toko Cosplay",
      description: "E-commerce platform for cosplay enthusiasts with modern UI",
      link: "https://webtokocosplay.vercel.app/",
      img: "./asset/img/tokocosplay.png",
      tech: ["React", "Bootstrap", "Firebase", "Responsive"],
      status: "Live"
    },
    {
      title: "Magic Shop",
      description: "Mystical e-commerce experience with interactive elements",
      link: "https://magicshop-beta.vercel.app/",
      img: "./asset/img/magic.png",
      tech: ["React", "CSS3", "JavaScript", "Animation"],
      status: "Beta"
    },
    {
      title: "Mikrotik Telegram Bot Monitor",
      description: "Network monitoring bot with SNMP integration for real-time alerts",
      link: "#",
      img: "./asset/img/profile.jpg",
      tech: ["Python", "SNMP", "Telegram Bot API", "Mikrotik"],
      status: "Private"
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Real-time network analytics with automated reporting system",
      link: "#",
      img: "./asset/img/profile.jpg",
      tech: ["Python", "Charts.js", "Auto Reports", "Linux"],
      status: "Development"
    },
    {
      title: "Mail Server Setup",
      description: "Complete mail server configuration with security hardening",
      link: "#",
      img: "./asset/img/profile.jpg",
      tech: ["Zimbra", "PMG", "DNS Config", "Linux"],
      status: "Completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'neon-green';
      case 'Beta': return 'neon-text';
      case 'Development': return 'neon-purple';
      case 'Private': return 'neon-magenta';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-black bg-opacity-30" id="projects">
      <div className="px-4 md:px-12 lg:px-24 py-20">
        <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="neon-text">My</span> <span className="neon-purple">Projects</span>
          </h2>
          
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From web apps to network tools, here's what I've been cooking up in my digital laboratory
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)} bg-black/50 backdrop-blur-sm`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold neon-text mb-2 group-hover:neon-purple transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-500 font-medium">Private Repository</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Want to see more or collaborate on something awesome?
            </p>
            <a href="#contact" className="cyber-button">
              Let's Build Something Wild
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;