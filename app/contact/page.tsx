"use client"
import Header from "../components/header/Header"
import emailjs, { send } from '@emailjs/browser';
import { useEffect, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../components/footer/Footer";

export default function Contact() {

  const form :any= useRef();



  const sendEmail = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    emailjs.sendForm('service_7uumykw', 'template_nlto6c8', form.current, '3K5DshioyJhu16hCj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success("Massage Send");
      form.current.reset();
  };
  
  
 
  // console.log(submitEmail);


    return <>
    <Toaster position="top-right"/>
    <div className="proj">

    <div className="  flex flex-wrap items-center justify-around w-screen ">
    <Header/>
    <div className="min-w-sceen flex  justify-center items-center" style={{height:'92vh'}}>

   
    <div className=" contact container-sm  flex flex-col  rounded" style={{height:"500px" , width:"500px"}}>

      <div className="text-center my-6"> <div className="head-title">
            <p className=" text-2xl font-bold text-white font-serif"></p>
          </div>
      </div>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="name" id="inline-full-name" type="text" required placeholder="john"/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" name="email" type="email" required placeholder="john@gmail.com"/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-number">
            Number
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" name="number" type="text" placeholder="91******11" maxLength={10}/>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow   focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  type="submit">
            Send
          </button>
        </div>
      </div>
      </form>
    </div>

  
    </div>
    </div>
  <Footer/>
      </div>



    </>
  }