"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


function Review() {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center font-extrabold sm:text-2xl dark:text-white '>Client Reviews for CrackyKitchen</h1>
        

        <div className=''>

        </div>
    </div>
  )
}

export default Review