import React from 'react'
import logo1 from "../../public/mnd.webp";

function Projects() {
    const cardItem=[
        {
            id:1,
            logo:logo1,
            name:"calender",
        },
        {
            id:2,
            logo:logo1,
            name:"laju",
        },
        {
            id:3,
            logo:logo1,
            name:"teju",
        },
        {
            id:4,
            logo:logo1,
            name:"rani",
        },
        {
            id:5,
            logo:logo1,
            name:"tanu",
        },
        {
            id:6,
            logo:logo1,
            name:"manish",
        },
        {
            id:7,
            logo:logo1,
            name:"mayur",
        },
    ]
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div>
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                {
                    cardItem.map(({id,logo,name})=>(
                        <div key={id} className="md:w-[300px] h-[300px] border-[2px] mt-5 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200">
                            <img src={logo} className="w-[120px] h-[120] p-1 rounded-full" alt="" />
                            <div className="text-justify">
                                <div className="text-xl font-bold mb-2 px-2">{name}</div>
                                <p className="px-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam amet nemo!</p>
                            </div>
                            <div className="px-4 py-2 justify-around">
                                <button className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">Source code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects;