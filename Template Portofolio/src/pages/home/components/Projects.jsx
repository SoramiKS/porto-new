import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Jokimil",
            link: "https://jokimil.vercel.app",
            img: "./asset/img/jokimil.png"
        },

    ];

    return (
        <div className="bg-black bg-opacity-50">
        <div className="py-16 px-8 md:py-24 md:px-52 border-white bg-red-950 bg-opacity-20 justify-center align-center place-content-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
                Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 justify-center align-center place-content-center">
                {projects.map((project, index) => (
                    <a href={project.link}>
                    <div
                        key={index}
                        className="border-[3px] border-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer md:w-[350px]"
                    >
                        <img className="rounded-t-lg object-cover h-[200px] w-full justify-center" src={project.img}></img>
                        <h3 className="text-xl font-bold text-white text-center p-4">{project.title}</h3>
                      
                    </div>
                    </a>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Projects;
