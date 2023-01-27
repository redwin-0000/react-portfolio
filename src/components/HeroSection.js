import React from "react";
import image from "./image/asu.jpg"
const HeroSection =()=>{
    return(
        <section className="text-gray-900 body-font bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">HI, THERE
        <br className="hidden lg:inline-block" /> I'M ASHUTOSH SINGH
      </h1>
      <p className="mb-8 leading-relaxed text-xl">A FRONT-END WEB DEVELOPER creating interactive application and UI/UX.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Resume</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-full" alt="hero" src={image} />
    </div>
  </div>
</section>
    )
}

export default HeroSection;