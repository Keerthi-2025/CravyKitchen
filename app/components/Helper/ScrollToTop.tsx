"use client";

import React, { useEffect, useState } from 'react'

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
    <div>ScrollToTop</div>
  )
}

export default ScrollToTop