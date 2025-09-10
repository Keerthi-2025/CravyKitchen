"use client";

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {

    // show and hide functionality for button

    const[isVisivle, setIsVisivle] = useState(false);

    useEffect(()=>{
        const toggleVisibility = () =>{
            if(window.scrollY > 300 ) setIsVisivle(true);
            else setIsVisivle(false);
        }

        window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll",toggleVisibility);
    }, [])


    //scrolltotop functionality
    const ScrollToTop = () =>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
    

  return (
    <div className=' fixed bottom-4 animate-pulse right-4'>
        {isVisivle && (
            <button className=' bg-cyan-200 cursor-pointer text-white rounded-full items-center justify-center focus:outline-none h-5 w-5 ' onClick={ScrollToTop}><FaArrowUp/></button>
        )}
        
      </div>
  )
}

export default ScrollToTop