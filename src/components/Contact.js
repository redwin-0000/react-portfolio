import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Header=()=> {
//const [letterClass, setLetterClass] = useState('text-animate')

  return (
   <>
  <TypeAnimation
      sequence={[
        'One', // Types 'One'
        1000, // Waits 1s
        'Two', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Two Three', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
   </>
  );
}

export default Header;