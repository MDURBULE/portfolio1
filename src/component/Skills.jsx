import React from 'react'
import cpp from "../../public/cpp.png";
import python from "../../public/python.png";
import java from "../../public/java.png";
import spring from "../../public/spring.png";
import jdbc from "../../public/jdbc.png";
import mysql from "../../public/mysql.png";
import react from "../../public/react.png";

function Skills() {
    const cardItem=[
        {
            id:1,
            logo:cpp,
            name:"C & C++",
        },
        {
            id:2,
            logo:python,
            name:"Python",
        },
        {
            id:3,
            logo:java,
            name:"Java",
        },
        {
            id:4,
            logo:jdbc,
            name:"JDBC",
        },
        {
            id:6,
            logo:spring,
            name:"Spring Boot",
        },
        {
            id:7,
            logo:mysql,
            name:"Mysql",
        },
        {
            id:8,
            logo:react,
            name:"React js",
        },
    ]
  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div>
            <h1 className="text-3xl font-bold mb-5">Skills</h1>
            <p className="font-semibold">Driven by a passion for problem-solving and innovation, I thrive in coding environments where I can turn creative ideas into functional software solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-3">
                {
                    cardItem.map(({id,logo,name})=>(
                        <div key={id} className="flex flex-col items-center md:w-[200px] h-[200px] border-[2px] my-5 rounded-full shadow-md p-1 cursor-pointer hover:scale-110 duration-200">
                            <img src={logo} className="w-[150px] p-1 rounded-full" alt="" />
                            <div className="text-justify">
                                <div className="text-xl font-bold ">{name}</div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills;