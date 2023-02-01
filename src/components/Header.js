import React from "react";

const Header=()=> {
  
  return (
    <header className="text-gray-600 body-font top-0 sticky bg-gray-300">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl font-bold">ASHUTOSH SINGH</span>
      </div>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <h2 className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>{
          document
          .getElementById("home")
          .scrollIntoView({behavior: "smooth"})
        }}>Home</h2>
        <h2 className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>{
          document
          .getElementById("about")
          .scrollIntoView({behavior:"smooth"})
        }}>About</h2>
        <h2 className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>{
          document
          .getElementById("project")
          .scrollIntoView({behavior:"smooth"})
        }}>Project</h2>
        <a className="mr-5 hover:text-gray-900 cursor-pointer" href="https://redwinj.hashnode.dev/">Blog</a>
      </nav>
    </div>
  </header>
  );
}

export default Header;