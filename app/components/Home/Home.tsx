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

  return (
    <div className=' '>
      
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