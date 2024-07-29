import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { ReactTyped,Typed } from "react-typed";
import logo from "../../public/mayur.jpeg";
import mayurcv from "../../public/mayurcv.pdf";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome in my feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello , I am </h1>
            <span className="text-red-700 font-bold">
            <ReactTyped
            strings={["Developer" , "Programmer" , "Coder"]}
            typeSpeed={70}
            backSpeed={60}
            loop={true}
        />
        </span>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Fueled by a deep passion for problem-solving and innovation, I excel in coding environments where I can transform imaginative concepts into practical software solutions. My enthusiasm for tackling challenges raise me to explore new technologies and methodologies, i'm ensure about it that my work is both cutting-edge and efficient. I enjoy working with diverse teams to share insights and enhance projects. I believe in continuous learning and adaptation, which allows me to grow both personally and professionally. my goal is to create impactful software that meets user needs and contributes to a more connected, efficient world.
              </p>
          <br />
          {/* social media icons */}
          <div className="flex flex-col items-center md:flex-row justify-between space-y-4 md:space-y-0">
           <div className="space-y-2">
            <h1 className="font-bold">Available on</h1>
            <ul className="flex space-x-5">
              <li className="text-2xl cursor-pointer hover:scale-110 duration-200"><a href="https://www.instagram.com/m.n.durbule?igsh=MTBkNmxoa2drMjk1bg==" target="_blank"><IoLogoInstagram /></a></li>
              <li className="text-2xl cursor-pointer hover:scale-110 duration-200"><a href="https://in.linkedin.com/in/mayur-durbule-20981b251" target="_blank"><FaLinkedin /></a></li>
              <li className="text-2xl cursor-pointer"></li>
            </ul>
           </div>
           <div className="space-y-2 ">
            <h1 className="font-bold">Currently working on</h1>
            <ul className="flex space-x-5">
              <li className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"><SiSpringboot /></li>
              <li className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"><FaReact /></li>
              <li className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"><SiMysql /></li>
            </ul>
           </div>
           </div>
           <div className="flex justify-center text-center items-center">
            <button className="bg-orange-500 text-white px-3 py-2 mt-3 text-xl rounded-xl shadow-lg border cursor-pointer hover:scale-110 hover:bg-orange-700 duration-200">
              <a href={mayurcv} target='_blank'>
                Show CV
                </a>
                </button>
           </div>
          </div>
          <div className="md:w-1/2 ml-4 md:ml-48 md:mt-20 order-1 mt-8 items-center justify-center">
          <img src={logo} className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px]" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home