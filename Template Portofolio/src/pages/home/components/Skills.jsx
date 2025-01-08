import React from "react";
import CardWithRippleExample from "./skill/skill-card";



const Skills = () => {
    const skills = ["React", "Tailwind CSS", "Node.js"];

    return (
        <section className="bg-blue-100 py-16 px-8 md:py-24 md:px-16 items-center object-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                Projecet
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 px-0 md:px-48 ">
            <CardWithRippleExample />
            <CardWithRippleExample />
            </div>

        </section>
    );
};

export default Skills;
