

import React, { useState } from 'react'


const Header = () => {
    let [openMenu, setOpenMenu] = useState(false)


    return (
        <div className='flex justify-center  bg-gray-300 text-black'>
            <nav className='self-cneter w-full max-w-7xl'>
                <div className='flex md:flex-row  justify-between items-center md:items-start'>
                    <h1 className='py-4 text-2xl font-sans font-bold px-10'>Portfolio</h1>
                    <div className='visible md:invisible absolute right-8 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                        <ion-icon name={openMenu ? 'close':'menu'} ></ion-icon>
                    </div>
                    <ul className={`  md:flex md:mt-3  md:items-center  absolute md:static  bg-gray-300 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-100 ease-in ${openMenu ? 'top-[65px]' : 'invisible md:visible top-[65px]'}`}>
                        <li className=' decoration-2 terdecoration-white py-2 rounded-lg px-2 md:px-5'>
                            <h1 onClick={()=>{
                               document
                               .getElementById("home")
                               .scrollIntoView({behavior: "smooth"})
                          }} className='cursor-pointer'>Home</h1>
                        </li>
                        <li className=' decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5 '>
                             <h1 onClick={()=>{
                             document
                             .getElementById("about")
                             .scrollIntoView({behavior:"smooth"})
                           }} className='cursor-pointer'>About</h1>
                         </li>
                        <li className=' decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5'>
                            <h1 onClick={()=>{
                            document
                            .getElementById("project")
                            .scrollIntoView({behavior:"smooth"})
                          }} className='cursor-pointer'>Project</h1>
                        </li>
                        <li className=' decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5 cursor-pointer'>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer" href="https://redwinj.hashnode.dev/">Blog</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header
