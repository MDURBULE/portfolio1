import React, { useState } from 'react';
import logo from "../../public/mayur.jpeg";
import { ImMenu } from "react-icons/im";
import { MdClose } from "react-icons/md";
import {Link} from "react-scroll";

function Nav() {

    const [menu,setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Skills"
        },
        {
            id:4,
            text:"Contact"
        }
        
    ]

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-2">
                <img src={logo} className="h-12 w-12 rounded-full" alt="" />
                <h1 className="fond-semibold text-xl cursor-pointer">Mayur Durbule
                <p className="text-sm">programmer</p>
                </h1>
            </div>
        
        {/* dekstop navbar */}
        <div >
            <ul className="hidden md:flex space-x-8 font-bold">
                {
                    navItems.map(({id,text})=>(
                        <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                            <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >

                            {text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={()=>setMenu(!menu)} className="md:hidden">
                {menu? <MdClose size={24}/>:<ImMenu size={24} />}
            </div>
        </div>
        </div>
        {/* mobile navbar */}
        
        { 
         menu && (
            <div className="bg-white  h-[250px]">
            <ul className="md:hidden flex flex-col h-screen items-center justify-start space-y-4 font-bold pt-2">
            {
                    navItems.map(({id,text})=>(
                        <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                            <Link to={text}
                                onClick={()=>setMenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >

                            {text}
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
        }
       
    </div>
    </>
  )
}

export default Nav;