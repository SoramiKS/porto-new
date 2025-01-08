import React from "react";

const Education = () => {
    const Education = [
        {
            title: "SMP St. Aloysius Turi",
            address: "Turi, Donokerto, Kec. Turi, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55551",
            date: "2019 - 2022",
            description:
                "Tumbuh dalam iman, unggul dalam pengetahuan dan teknologi, berwawasan global, dan cinta lingkungan.",
        },
        {
            title: "SMK Negeri 2 Yogyakarta",
            address: "Jl. A.M. Sangaji No.47, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
            date: "2022 - Sekarang",
            description:
                "Menghasilkan Tamatan Yang Berkarakter, Unggul, Berwawasan Lingkungan, dan Berdaya Saing Global.",
        },
    ];

    return(
    <section className="bg-blue-100 py-16 px-8 md:py-24 md:px-16">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-slate-800">
        Education
    </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Education.map((exp, index) => (
                    <div
                        key={index}
                        className="border-[3px] border-slate-800 rounded-lg p-6 hover:scale-105 transition-all cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-gray-600 mb-2">{exp.address}</p>
                        <p className="text-gray-600 mb-4">{exp.date}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
</section>
    )
}

export default Education;
