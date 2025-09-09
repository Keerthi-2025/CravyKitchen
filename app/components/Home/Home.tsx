import React from 'react'
import Hero from './Hero/Hero'
import Res from './Res/Res'
import Cat from './Cat/cat';
import Demo from './Demo/Demo';

function Home() {
  return (
    <div className=' h-[2000px]'>
      
      <Hero/>
      <Res/>
      <Cat/>
     <Demo/>
    </div>
   
  )
}

export default Home