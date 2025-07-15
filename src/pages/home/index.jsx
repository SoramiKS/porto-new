import React from "react";
import Hero from "./components/Hero.jsx";
import Experiences from "./components/Projects.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import About from "./components/Aboutme.jsx";

const Home = () => {
    return (
        <>
        <Hero />
        <About />
        <Projects />
        <Education />
        </>
    );
};

export default Home;