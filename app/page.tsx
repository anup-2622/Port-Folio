'use client'
import Image from 'next/image'
import Header from './components/header/Header'

import toast, { Toaster } from 'react-hot-toast';
import { useState , useEffect } from "react"; 
import Main from './components/home/Main';
import Footer from './components/footer/Footer';



export default function Home() {
  const [count , setCount] = useState(0);
  const [calculation , setCalculatin] = useState(0);
  
  useEffect (()=>{
     toast.success('Welcome Buddy');
    // document.title = `count ${count}`;
    setCalculatin(()=>count * 2);
  },[])

  return (
      <>
      <Toaster  position="top-right"  />
          <Main/>
              </>
  )
}
