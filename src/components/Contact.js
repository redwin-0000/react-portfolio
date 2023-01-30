import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Header=()=> {
//const [letterClass, setLetterClass] = useState('text-animate')

  return (
   <>
  <TypeAnimation
      sequence={[
        'Contact', 
        1000, 
        'Contact me', 
        2000,
     
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