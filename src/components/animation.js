import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Animation=()=> {
  return (
   <>
   <div className="text-blue-700 text-2xl font-serif font-medium">
  <TypeAnimation
      sequence={[
        'HI! THERE', 
        1000, 
        'I,M', 
        1000, 
        'ASHUTOSH SINGH', 
        1000,
        'FRONT-END REACT-JS WEB DEVELOPER',
        2000,
        'AND REACT-NATIVE APPLICATION DEVELOPER.',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
    </div>
   </>
  );
}

export default Animation;
