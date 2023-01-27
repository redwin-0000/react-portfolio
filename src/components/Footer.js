import React from "react";

const Footer=()=>{
    return(
        <footer className="text-gray-600 body-font flex flex-row">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">My PortFolio</span>
          </h1>
          <h3 className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Redwin —
           </h3>
          <h2 className="text-gray-600 ml-1">Ashutosh Singh</h2>
          <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          </h1>

          <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ml-4">
            <span className="ml-3 text-xl">  Contact</span>
          </h1>
          <h3 className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">redwin125896@gmail.com </h3>
         <h2 className="text-gray-600 ">+91 9161710334</h2>
        </div>

       

        
      </footer>
    )
}

export default Footer;