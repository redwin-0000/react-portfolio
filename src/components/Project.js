import React,{useState} from "react";
import Data from "./data";
const Project =()=>{
  const [noOfElement, setnoOfElement] =  useState(3);

  const slice = Data.cardData.slice(0,noOfElement);
 const loadMore = ()=>{
  setnoOfElement(noOfElement + noOfElement);
 }

return(
<section id="project" className="text-gray-600 body-font bg-gray-200">
<h2 className="sm:text-3xl text-center  text-2xl text-gray-900">PROJECT</h2>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

  {
    slice.map((items, index)=>{
   return(
    <div key={index} className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={items.img} alt="e-commerce" />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-500 mb-3">{items.title}</h1>
          <p className="leading-relaxed mb-3 text-gray-900 text-xl">Technologies Used <span className="text-blue-700">{items.technology}</span></p>
          <div className="flex items-center flex-wrap gap-36">
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href={items.live}>Live
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" href={items.Repo}>Repo
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
   )
    })
  }
    </div>
    <div className="flex  justify-center pt-4">
    <button className="h-full border-2 bg-blue-600 rounded-md px-2 py-2 overflow-hidden text-white" onClick={()=> loadMore()}>Load More</button>

    </div>
  </div>
</section>
)
}

export default Project;