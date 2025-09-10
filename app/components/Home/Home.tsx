"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Res from './Res/Res'
import Cat from './Cat/cat';
import Demo from './Demo/Demo';
import About from './About/About';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import Foot from './Foot/Foot';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(()=>{
    const initAOS = async () =>{
      await import ("aos")
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
  })


  return (
    <div className=' h-[2000px]'>
      
      <Hero/>
      <Res/>
      <Cat/>
     <Demo/>
     <About/>
     <Feature/>
     <Review/>
    <Foot/>
    </div>
   
  )
}

export default Home