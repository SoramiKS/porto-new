import React from "react";

const Experiences = () => {
    const experiences = [
        {
            title: "None",
        },

    ];

    return (
        <section className="bg-blue-100 py-16 px-8 md:py-24 md:px-52">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                Experiences
            </h2>

            <div className="gap-8 items-center">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-[3px] items-center border-slate-800 rounded-lg p-6 hover:scale-105 transition-all cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-2 text-center">{exp.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
