import React, { useState } from "react";
import Loading from "../../components/Loading";
import Hero from "./components/Hero.jsx";
import About from "./components/Aboutme.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  // Console Easter Egg
  React.useEffect(() => {
    console.log("You found the dev room 👀");
    console.log("Welcome to the matrix, fellow developer!");
    console.log("Try the Konami code: ↑↑↓↓←→←→BA");

    // Konami Code Easter Egg
    let konamiCode = [];
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];

    const handleKeyDown = (e) => {
      konamiCode.push(e.code);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        document.body.classList.add('konami-active');
        console.log("🎉 KONAMI CODE ACTIVATED! 🎉");
        setTimeout(() => {
          document.body.classList.remove('konami-active');
        }, 3000);
        konamiCode = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {showLoading && <Loading onComplete={() => setShowLoading(false)} />}
      {!showLoading && (
        <>
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;