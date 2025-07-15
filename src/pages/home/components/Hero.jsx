import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black bg-opacity-30 font-android" id="home">
      <div className="flex flex-col items-center justify-center min-h-screen relative px-4 sm:px-8 md:px-16 lg:px-24 parallax-bg">
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Main content */}
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Name with Cyberpunk Styling */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="neon-text">Emiliano</span>{" "}
            <span className="neon-purple">Sebastian</span>{" "}
            <span className="neon-magenta">Freitas</span>
          </h1>
          
          {/* Subheadline */}
          <div className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-300">
            <span className="neon-green">Web Developer</span> | 
            <span className="neon-text"> Network Alchemist</span> | 
            <span className="neon-purple"> Code Gremlin</span>
          </div>
          
          {/* Tagline */}
          <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-400 max-w-2xl mx-auto">
            "I craft websites that look good and work even better."
          </p>

          {/* Animated Typing Effect */}
          <div className="text-sm md:text-base mb-12 text-cyan-400 font-mono">
            <span className="opacity-60">&gt; </span>
            <span className="animate-pulse">Currently brewing digital magic with React & caffeine...</span>
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToProjects}
            className="cyber-button text-lg px-8 py-4 hover-lift"
          >
            Explore My Projects
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;