import React, { useEffect, useState } from "react";
import { 
  FaGithub, 
  FaInstagram, 
  FaYoutube, 
  FaTelegram,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.open(`mailto:freitas.emiliano1@gmail.com?subject=${subject}&body=${body}`);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/SoramiKS",
      color: "hover:text-white",
      description: "Check out my code"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:freitas.emiliano1@gmail.com",
      color: "hover:text-red-400",
      description: "Drop me a line"
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      url: "https://t.me/soramiks",
      color: "hover:text-blue-400",
      description: "Quick chat"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/freytaz_/",
      color: "hover:text-pink-400",
      description: "Behind the scenes"
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@soramiks5763",
      color: "hover:text-red-500",
      description: "Tech tutorials"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "#",
      color: "hover:text-blue-500",
      description: "Professional network"
    }
  ];

  return (
    <div className="bg-black bg-opacity-30" id="contact">
      <div className="px-4 md:px-12 lg:px-24 py-20">
        <div className={`section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="neon-text">Let's Build</span> <span className="neon-purple">Something</span> <span className="neon-magenta">Wild</span>
          </h2>
          
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a crazy idea or a boring one you want to make less boring? Hit me up.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold neon-text mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your awesome name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="your.email@domain.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell me about your project, idea, or just say hi!"
                  />
                </div>
                
                <button type="submit" className="cyber-button w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-bold neon-purple mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-cyan-400 text-xl" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <a href="mailto:freitas.emiliano1@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        freitas.emiliano1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaTelegram className="text-blue-400 text-xl" />
                    <div>
                      <div className="text-white font-medium">Telegram</div>
                      <a href="https://t.me/soramiks" className="text-gray-400 hover:text-blue-400 transition-colors">
                        @soramiks
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card p-8 hover-lift">
                <h3 className="text-2xl font-bold neon-green mb-6">Find Me Online</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 hover:scale-105 group ${social.color}`}
                    >
                      <social.icon size={32} className="mb-2" />
                      <span className="text-sm font-medium text-center">{social.name}</span>
                      <span className="text-xs text-gray-500 text-center mt-1">{social.description}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun CTA */}
              <div className="glass-card p-8 hover-lift text-center">
                <h4 className="text-xl font-bold neon-magenta mb-4">Ready to Collaborate?</h4>
                <p className="text-gray-400 mb-6">
                  Whether it's a full-stack web app, network automation, or just debugging life's problems over coffee ☕
                </p>
                <a href="https://wa.link/qn2g58" target="_blank" rel="noopener noreferrer" className="cyber-button">
                  Let's Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;