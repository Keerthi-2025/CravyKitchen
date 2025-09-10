import React from 'react'
import Hero from './Hero/Hero'
import Res from './Res/Res'
import Cat from './Cat/cat';
import Demo from './Demo/Demo';
import About from './About/About';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import MobReview from './MobReview/MobReview';

function Home() {
  return (
    <div className=' h-[2000px]'>
      
      <Hero/>
      <Res/>
      <Cat/>
     <Demo/>
     <About/>
     <Feature/>
     <Review/>
     <MobReview/>
    </div>
   
  )
}

export default Home