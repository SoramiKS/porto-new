import React, { useEffect, useState } from "react";

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black bg-opacity-30" id="about">
      <div className="px-4 md:px-12 lg:px-24 py-20">
        <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="neon-text">About</span> <span className="neon-purple">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Profile Card */}
            <div className="glass-card p-8 hover-lift">
              <div className="relative mb-6">
                <img
                  className="rounded-lg w-full h-[300px] object-cover"
                  src="./asset/img/profile.jpg"
                  alt="Emiliano Sebastian Freitas"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-lg"></div>
              </div>
              
              <h3 className="text-2xl font-bold neon-text text-center mb-6">
                Emiliano Sebastian Freitas
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  I turn ideas into working websites, caffeine into code, and bugs into punchlines. 
                  With a background in web dev and networking, I blend frontend finesse with backend chaos—and somehow it just works.
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  <span className="emoji-hover">💻</span>
                  <span className="emoji-hover">☕</span>
                  <span className="emoji-hover">🪲</span>
                  <span className="emoji-hover">🚀</span>
                  <span className="emoji-hover">⚡</span>
                </div>
              </div>
            </div>

            {/* Skills & Fun Facts */}
            <div className="space-y-8">
              
              {/* Current Status */}
              <div className="glass-card p-6 hover-lift">
                <h4 className="text-xl font-bold neon-green mb-4">Current Status</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-gray-300">Student at SMK Negeri 2 Yogyakarta</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-gray-300">Freelance Web Developer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-gray-300">Network Enthusiast</span>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="glass-card p-6 hover-lift">
                <h4 className="text-xl font-bold neon-magenta mb-4">Fun Facts</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <span className="neon-text mr-2">→</span>
                    <span>Ready to work under pressure (as long as it doesn't disturb my sleep)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="neon-purple mr-2">→</span>
                    <span>High enthusiasm for learning new things</span>
                  </div>
                  <div className="flex items-start">
                    <span className="neon-magenta mr-2">→</span>
                    <span>Good adaptation skills & team player</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-6 hover-lift">
                <h4 className="text-xl font-bold neon-purple mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold neon-text">5+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold neon-green">∞</div>
                    <div className="text-sm text-gray-400">Coffee Cups</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold neon-magenta">24/7</div>
                    <div className="text-sm text-gray-400">Learning</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold neon-purple">100%</div>
                    <div className="text-sm text-gray-400">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;