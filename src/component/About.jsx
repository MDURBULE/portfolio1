import React from 'react'
import logo from "../../public/mayur1.jpg";

function About() {
  return (
    <>
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-2">
            <div className="flex flex-col md:flex-row ">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 "><img src={logo} className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px]" alt="" /></div>
                <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 items-center text-justify">
                <h1 className="text-3xl font-bold mb-5">Who am I?</h1>
                I’m Mayur Durbule , dynamic B. Tech student specializing in Electronics and Telecommunication with robust programming foundation . Proficient in C & C++ , Java , Python and SQL , with expertise in basics of  Data Structures and  Algorithms . Skill in technologies including JDBC , Spring boot and React . I’m good with Analytical, Communication , Problem solving,  Critical thinking, Team management , Leadership and I’m also good in Microsoft Office tools, Postman, Workbench , Maven and Chatgpt . I'm eager to apply theoretical knowledge to tackle real-word challenges and keen on continuous learning and growth .  
                <div className="max-w-screen-2xl container mx-auto  my-5">
                <h1 className="text-orange-500 font-semibold text-xl">Experience</h1>
                       <p>I have completed internship which based on core Java in APS Microtech from feb-23 to mar-23</p>
                        <br />
                        <p>I have completed internship which based on core Java , JDBC , and SQl in Congnifyz from nov-23 to dec-23</p>
                         <br />
                </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default About;
