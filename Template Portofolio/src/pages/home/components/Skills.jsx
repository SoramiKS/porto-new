import React from "react";
import CardWithRippleExample from "./skill/skill-card";

const Skills = () => {
    const skills = ["Jokimil", "Tailwind CSS", "Node.js"];

    const cardData = [
        {
            image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
            title: "Jokimil",
            content: "Website jasa joki game wuthering waves dan honkai star rail. Kodingannya masih sangat berantakan karena saya convert dari wordpress ke html",
            linknya: "https://jokimil.vercel.app/"
        },
        {
            image: "https://tecdn.b-cdn.net/img/new/standard/nature/187.jpg",
            title: "Tailwind CSS",
            content: "A utility-first CSS framework for rapid UI development."
        },
        {
            image: "https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg",
            title: "Node.js",
            content: "A JavaScript runtime built on Chrome's V8 JavaScript engine."
        }
    ];

    return (
        <section className="bg-blue-100 py-16 px-8 md:py-24 md:px-16 items-center object-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
                Project
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 px-0 md:px-48">
                {cardData.map((card, index) => (
                    <CardWithRippleExample
                        key={index}
                        image={card.image}
                        title={card.title}
                        content={card.content}
                        linknya={card.linknya}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;

