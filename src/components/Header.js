import React from "react";
import {useNavigate} from "react-router-dom";

const Header=()=> {
    const nav = useNavigate()
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl font-bold">Ashutosh Singh</span>
      </div>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900" onClick={()=>{nav("/Home")}}>Home</a>
        <a className="mr-5 hover:text-gray-900" onClick={()=>{nav("/About")}} href="Home">About</a>
        <a className="mr-5 hover:text-gray-900" onClick={()=>{nav("/Project")}} href="Home">Project</a>
        <a className="mr-5 hover:text-gray-900" href="Hashnode">Blog</a>
      </nav>
    </div>
  </header>
  );
}

export default Header;