"use client";

import React, { useEffect, useState } from 'react'

function ScrollToTop() {

    const[isVisivle, setIsVisivle] = useState(false);

    useEffect(()=>{
        const toggleVisibility = () =>{
            if(window.scrollY > 300 ) setIsVisivle(true);
            else setIsVisivle(false);
        }
    })
  return (
    <div>ScrollToTop</div>
  )
}

export default ScrollToTop