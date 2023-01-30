import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Animation=()=> {
  return (
   <>
   <div className="text-blue-500 text-2xl font-serif font-medium">
  <TypeAnimation
      sequence={[
        'HI! THERE', // Types 'One'
        1000, // Waits 1s
        'I,M', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'ASHUTOSH SINGH', // Types 'Three' without deleting 'Two'
        1000,
        'FRONT-END WEB DEVELOPER',
        2000,
        'AND UI/UX DESIGNER.',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    //   style={{ fontSize: '2em' }}
    />
    </div>
   </>
  );
}

export default Animation;