import React from "react";
import HoverCard from "../card/hover-effect-card";

const Projects = () => {
  const projects = [
    {
      title: "Jokimil",
      link: "https://jokimil.vercel.app",
      img: "./asset/img/jokimil.png",
    },
    {
      title: "Toko Cosplay",
      link: "https://webtokocosplay.vercel.app/",
      img: "./asset/img/tokocosplay.png",
    },
    {
      title: "Magic Shop",
      link: "https://magicshop-beta.vercel.app/",
      img: "./asset/img/magic.png",
    },
  ];

  return (
    <div className="bg-black bg-opacity-50 " >
      <div className="bg-red-950 bg-opacity-20 border-white">
        <div className="text-focus-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white fadeInUp-animation" id="projects">
            Projects
          </h2>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-focus-in justify-items-center items-stretch">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="h-72 w-full md:w-[350px] sm:w-[250px]"
              >
                <HoverCard
                  data-modal-target="static-modal"
                  data-modal-toggle="static-modal"
                  columns={10}
                  containerClassName="h-72 w-full md:w-[350px] sm:w-[250px] fadeInUp-animation text-focus-in"
                  maxXrotation={15}
                  maxYrotation={15}
                  rows={12}
                >
                  <div className="bg-gray-500 backdrop-blur-10 bg-opacity-25 rounded-xl cursor-pointer fadeInUp-animation text-focus-in">
                    <img
                      className="rounded-t-xl object-cover h-[200px] w-full"
                      src={project.img}
                      alt={project.title}
                    />
                    <h3 className="text-xl font-bold text-white text-center p-4">
                      {project.title}
                    </h3>
                  </div>
                  
                

                </HoverCard>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-red-950 to-green-950 pb-52 opacity-20"></div>
    </div>
  );
};

export default Projects;
