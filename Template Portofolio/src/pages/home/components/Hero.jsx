import React from "react";

const Hero = () => {
  return (
    <>
    <div className="bg-black bg-opacity-50">

<div className="flex flex-col items-center justify-center min-h-screen relative px-4 sm:px-8 md:px-16 lg:px-24 py-[100px] bg-blue-950 bg-opacity-20">

        {/* Main content */}
        <div className="text-center max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Emiliano Sebastian Freitas
          </h1>
          <h2 className="text-md sm:text-lg md:text-md lg:text-md font-bold mb-6 leading-tight">
            FrontEnd Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-gray-300">
            I am a student at SMK Negeri 2 Yogyakarta who has a high enthusiasm
            for learning new things. I'm ready to learn what it takes to be
            better and useful to the company. I have good enough adaptation that
            I am ready to work under pressure as long as it doesn't disturb my
            sleep.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all">
              <span className="text-sm sm:text-base md:text-lg">About Me</span>
            </div>
            <div className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all">
              <span className="text-sm sm:text-base md:text-lg">Projects</span>
            </div>
            <div className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all">
              <span className="text-sm sm:text-base md:text-lg">Contact</span>
            </div>
          </div>
        </div>

        {/* Coming soon image */}
        <div className="absolute top-4 right-4">
          <img
            alt="3D text saying 'COMING SOON' in a loop"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-40"
            src="https://s1882.pcdn.co/wp-content/uploads/VoaBStransp.gif"
          />
        </div>
      </div>
      </div>
      <div className="bg-black bg-opacity-50">
      <div className="bg-gradient-to-b from-blue-950 to-red-950 p-10 opacity-20"></div>
      </div>
      </>
  );
};

export default Hero;
