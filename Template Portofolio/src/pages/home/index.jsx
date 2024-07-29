import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/education";


const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Experiences />
            <Education />
        </>
    );
};

export default Home;
