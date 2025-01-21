import React from "react";

const Hero = () => {
  return (
    <>
    <div className="bg-black bg-opacity-50">

<div className="flex flex-col items-center justify-center min-h-screen relative px-4 sm:px-8 md:px-16 lg:px-24 bg-blue-950 bg-opacity-20 ">

        {/* Main content */}
        <div className="text-center max-w-4xl text-focus-in">
          <p className="text-sm font-bold mb-6 leading-tight fadeInUp-animation text-focus-in">
          FrontEnd Developer
          </p>
          <h1 className="text-xl hover-underline  font-bold mb-6 leading-tight  fadeInUp-animation  text-focus-in">
          “Trust is a fickle servant, laboriously gained yet so easy to lost”
          </h1>
          <p className="text-base mb-8 leading-relaxed text-gray-300 fadeInUp-animation text-focus-in">
            Welocme to my web! Feel free to explore
          </p>



        </div>

      </div>
      </div>
      <div className="bg-black bg-opacity-50">
      <div className="bg-gradient-to-b from-blue-950 to-purple-950 pb-52 opacity-20"></div>
      </div>
      </>
  );
};

export default Hero;
