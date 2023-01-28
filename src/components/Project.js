import React from "react";
import ecimage from "../components/image/eg.png"
import rodeImage from "../components/image/rode.png"
import auth from "../components/image/auth.png"
const Project =()=>{
return(
<section className="text-gray-600 body-font bg-gray-200">
<h2 className="sm:text-3xl text-center  text-2xl text-gray-900">PROJECT</h2>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ecimage} alt="e-commerce" />
        <div className="p-6">
          {/* <h2 className="tracking-widest text-2xl title-font font-bold  text-gray-200 mb-1">Title</h2> */}
          <h1 className="title-font text-lg font-medium text-gray-500 mb-3">E-Commerce Clone</h1>
          <p className="leading-relaxed mb-3 text-gray-900 text-xl">Technologies Used <span className="text-blue-700">ReactJs, TailwindCSS, Zustand</span></p>
          <div className="flex items-center flex-wrap gap-36">
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://e-g-shopping-redwin.netlify.app/">Live
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://github.com/redwin-0000/e-commerce">Repo
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={auth} alt="blog" />
        <div className="p-6">
          {/* <h2 className="tracking-widest text-2xl title-font font-bold  text-gray-200 mb-1">Title</h2> */}
          <h1 className="title-font text-lg font-medium text-gray-500 mb-3">Authentication with Firebase</h1>
          <p className="leading-relaxed mb-3 text-gray-900 text-xl">Technologies Used <span className="text-blue-700">ReactJs, CSS, JavaScript</span></p>
          <div className="flex items-center flex-wrap gap-36">
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://authe-firebase.netlify.app/">Live
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://github.com/redwin-0000/signIn">Repo
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={rodeImage} alt="rode-clone" />
        <div className="p-6">
          {/* <h2 className="tracking-widest text-2xl title-font font-bold  text-gray-500 mb-1">Title</h2> */}
          <h1 className="title-font text-lg font-medium text-gray-500 mb-3">Rode Clone</h1>
          <p className="leading-relaxed mb-3 text-gray-900 text-xl">Technologies Used <span className="text-blue-700"> HTML, TailwindCSS</span></p>
          <div className="flex items-center flex-wrap gap-36">
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://rode-poj-clone.netlify.app/">Live
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href="https://github.com/redwin-0000/rode-clone">Repo
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</section>
)
}

export default Project;