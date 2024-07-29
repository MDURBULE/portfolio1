import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <><hr />
    <footer name="Footer" className="py-5">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 ">
          <a href="https://www.instagram.com/m.n.durbule?igsh=MTBkNmxoa2drMjk1bg==" target="_blank" className="hover:scale-110 duration-200"><IoLogoInstagram size={24}/></a>
          <a href="https://in.linkedin.com/in/mayur-durbule-20981b251" target="_blank" className="hover:scale-110 duration-200"><FaLinkedin size={24}/></a>  
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm"> &copy; information Lorem ipsum dolor sit amet.</p>
            <p className="text-sm">your partner Mayur</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer