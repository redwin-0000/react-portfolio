import React from "react";
import html from "../components/skillAssets/html.svg"
import api from "../components/skillAssets/api.svg"
import css from "../components/skillAssets/css.svg"
import firebase from "../components/skillAssets/firebase.svg"
import javascript from "../components/skillAssets/javascript.svg"
import react from "../components/skillAssets/react.svg"
import vscode from "../components/skillAssets/vscode.svg"
import { TypeAnimation } from 'react-type-animation';
const About =()=>{
    return(
        <section id="about" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 bg-white">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ABOUT ME</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
            <spam className="text-blue-700 text-2xl font-serif font-medium">
              <TypeAnimation 
               sequence={[
                'I,M', 
                1000, 
                'A FRONT-END WEB DEVELOPER', 
                2000,
                'AND UI/UX DESIGNER.',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              />
            </spam>
            I have done my training in Bootcamp of full Stack JavaScript
           from iNeuron by Hitesh choudhary sir. Recently, I'm B-Tech final year student and excited to work with organisation.</p>
          </div>
         </div>
                                                            {/* skills */}
        <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SKILLS</h1>
  
     <div
    className="max-w-[1400px] bg-[#ffffff]  text-2xl font-serif text-[#333333] p-10 rounded-3xl flex flex-row gap-10 flex-wrap items-center justify-center "
  >
   
    <div
      className="bg-white p-2 text-center rounded-md transition-all ease-linear delay-150 hover:shadow-2xl  border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]"
    >
      <img src={html} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">HTML</h3>
    </div>
   
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl  border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]"
    >
      <img src={api} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">REST API</h3>
    </div>
   
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]"
    >
      <img src={css} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">CSS</h3>
    </div>
   
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl   border duration-100 flex items-center justify-center flex-col w-[110x] h-[110px]"
    >
      <img src={firebase} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">FIREBASE</h3>
    </div>
  
   
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl  border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]"
    >
      <img src={javascript} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">JAVASCRIPT</h3>
    </div>
    
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]" 
    >
      <img src={react} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">REACT</h3>
    </div>
   <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]" 
    >
      <img src={react} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[11px] font-bold">REACT-NATIVE</h3>
    </div>
          
    <div
      className="bg-white p-2 text-center rounded-md delay-150 hover:shadow-2xl  border duration-100 flex items-center justify-center flex-col w-[110px] h-[110px]"
    >
      <img src={vscode} alt="" className="h-[40px] text-[#333333]" />
      <h3 className="text-[15px] font-bold">VSCODE</h3>
    </div>
    </div>
  </div>
  </div>
      </section>
    )
}

export default About;
