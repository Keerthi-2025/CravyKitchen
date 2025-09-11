import React from 'react'
import FeatureCard from './FeatureCard'

function Feature() {
  return (
    <div className='pt-16 pb-16 '>
        <h1 className='text-xl text-center sm:text-2xl font-extrabold'>CrackyKitchen Features – What Makes Us the Best</h1>
        <div className='w-[80%] mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>

            <div>
                <FeatureCard icon="/globe.jpg" 
                title="Diverse Global Cuisines" 
                description ="Enjoy dishes from Italy, India, China, and more — all in one place. "/>
            </div>

             <div>
                <FeatureCard icon="/food1.jpg" 
                title="Lightning-Fast Delivery"
                description='Get your meals delivered fresh and on time, every time.'
                />
            </div>


             <div>
                <FeatureCard icon="/chef.jpg" 
                title="Chef-Curated Menus"
                description='Professionally designed menus for unbeatable taste and quality.'/>
            </div>


             <div>
                <FeatureCard icon="/golddd.jpg" 
                title="Premium Quality"
                description='We use fresh, high-quality ingredients in every meal.'
                />
            </div>


             <div>
                <FeatureCard icon="/easy.jpg"
                 title="Easy Ordering"
                 description='Quick, easy, and hassle-free ordering on any device.'/>
            </div>


             <div>
                <FeatureCard icon="/reward.jpg" 
                title="Great Deals & Rewards"
                description='Enjoy exclusive offers, loyalty points, and daily discounts.'/>
            </div>


        </div>
    </div>
  )
}

export default Feature