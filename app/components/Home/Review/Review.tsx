"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';


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


            <div className='mt-16 mx-auto w-[80%]'>

                <Carousel

                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                >

                    <ReviewCard                     /* Removed the <div> and placed our ReviewCard */
                    title="Best food delivery experience ever!"
                    username="Keerthana, Mysore"
                    userimage="/keerthana.jpg"
                    review="CrackyKitchen has completely changed the way I order food! The variety is amazing, 
                    the delivery is quick, and every dish tastes like it came straight from a high-end restaurant. 10/10!"
                    role="Software Developer"
                    />  
                    
                     <ReviewCard                     
                    title="Quick, tasty, and student-friendly!"
                    username="Nihal, Mysore"
                    userimage="/nihal.jpg"
                    review="Delicious food, delivered fast. What more could I ask for? Plus, their student discounts are a lifesaver during exam weeks!"
                    role="Software Developer"
                    />  

                    <ReviewCard                     
                    title="A premium food experience at home"
                    username="Divya,Bangalore"
                    userimage="/girl.png"
                    review="I’ve tried many food apps, but CrackyKitchen stands out with quality, presentation, and consistency. 
                    The UI is clean, and every order has been spot-on."
                    role="UI UX Developer"
                    />   

                    <ReviewCard                    
                    title="Family-approved meals every time!"
                    username="Gahana, Mangalore"
                    userimage="/mom.jpg"
                    review="As a mom, I’m picky about what my kids eat. 
                    CrackyKitchen gives me peace of mind with healthy options that they actually love. It’s our weekend treat!”"
                    role="HomeMaker"
                    />  

                   <ReviewCard                     
                    title="My go-to food app for cravings"
                    username="Rohith, Mumabi"
                    userimage="/rohith.jpg"
                    review="Obsessed with the pasta here! 😍 CrackyKitchen is my go-to every weekend. Super fast delivery and great offers — can’t get enough!"
                    role="Marketing Intern"
                    />  
                    
                </Carousel>

            </div>
        </div>
    )
}

export default Review