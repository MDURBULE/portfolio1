import axios from 'axios'
import React, { useId } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>{
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/awngvqpb",userInfo);
           toast.success("your message successfully sended ");
        }catch(error){
            toast.error("something is wrong")
        }
      }
    return (
        <>
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row ">
                    <div className="md:w-1/2 md:ml-4 md:mt-2 order-1 mt-8 items-center">
                        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                        <p>I'm currently looking for new opportunities, my inbox is always open. Whatever your have a quetions or just want to say hi , i'll try my best to get back to you! if you don't wanna wait , connect me with below contacts i'm active on Social Platforms .</p>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-2 space-y-2 order-2 md:order-1">
                        <div className="flex flex-col items-center justify-center mt-5">
                            <form 
                            // action="https://getform.io/f/awngvqpb" method="POST" 
                            className="bg-slate-200 w-96  px-8 py-5 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="text-xl font-semibold mb-4">Send your message </h1>
                                <div className="flex flex-col mb-4">
                                    <label className="block text-gray-700">Full Name </label>
                                    <input className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-gray-400 hover:scale-110 duration-100"
                                        type="text" id="name"
                                        name="name"
                                        {...register("name", { required: true })}
                                        placeholder="Enter your full name" />
                                        {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="block text-gray-700">Email Address </label>
                                    <input className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-gray-400 hover:scale-110 duration-100"
                                        type="email" id="email"
                                        name="email"
                                        {...register("email", { required: true })}
                                        placeholder="you@google.com" />
                                        {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="block text-gray-700">Message </label>
                                    <textarea className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-gray-400 hover:scale-110 duration-100"
                                        type="text" id="message"
                                        name="message"
                                        {...register("message", { required: true })}
                                        placeholder="Type your message here" />
                                        {errors.message && <span className="text-red-600">This field is required</span>}
                                </div>
                                <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700  hover:scale-110 duration-200">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;