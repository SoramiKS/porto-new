import React, { useState } from "react";

const Education = () => {
  const education = [
    {
      img: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64507339.87006956!2d86.82191154353754!3d-9.314158299217295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58373fffffff%3A0xa4ec1ca156555926!2sSMK%20Negeri%202%20Yogyakarta!5e0!3m2!1sid!2sid!4v1737375985986!5m2!1sid!2sid",
      zoom: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1202435174846!2d110.36736959999999!3d-7.777072899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58373fffffff%3A0xa4ec1ca156555926!2sSMK%20Negeri%202%20Yogyakarta!5e0!3m2!1sid!2sid!4v1737374702375!5m2!1sid!2sid",
      title: "SMK Negeri 2 Yogyakarta",
      deskripsi:
        "Menghasilkan Tamatan Yang Berkarakter, Unggul, Berwawasan Lingkungan, dan Berdaya Saing Global",
      link: ""
    }
  ];

  const [hoveredMap, setHoveredMap] = useState(null);

  return (
    <div className="bg-black bg-opacity-50" id="educations">
      <div
        className="bg-green-950 bg-opacity-20 px-8 md:px-52 border-white pb-24"
        id="education"
      >
        <div class="text-focus-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white fadeInUp-animation text-focus-in">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-8 justify-items-stretch pb-12 fadeInUp-animation">
              {education.map((item, index) => (
                <a href={item.link} key={index}>
                  <div
            
                    className="border-[3px] border-white rounded-lg cursor-pointer md:w-full hover:flip-scale-up-hor text-focus-in"
                    onMouseEnter={() => setHoveredMap(item.zoom)} // Set zoom URL on hover
                    onMouseLeave={() => setHoveredMap(item.img)} // Set default URL on mouse leave
                  >
                    <iframe
                      src={hoveredMap || item.img} // Use hoveredMap state for zoomed map, otherwise default
                      className="w-full h-72"
                      referrerpolicy="no-referrer-when-downgrade"
                      title={item.title}
                    ></iframe>
                    <h2 className="text-xl font-bold text-white text-center p-4 ">
                      {item.title}
                    </h2>
                    <p className="text-sm font-bold text-white text-center p-4">
                      {item.deskripsi}
                    </p>
                  </div>
                </a>
              ))}
            </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-green-950 to-black pb-52 opacity-20"></div>

    </div>
  );
};

export default Education;
