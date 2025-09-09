import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='pt-9 pb-9'>
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
                <Image src="/main.jpg" width={700} height={700} alt='image'/>
            </div>

            <div>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>
                    CravyKitchen – Where Cravings Meet Creativity
                </h1>

                <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>At CravyKitchen, we blend bold, global flavors with the warmth of home cooking. 
                    Whether you're here for a quick recipe or a deep culinary dive, we’ve got your cravings covered.</p>

                    <div className='mt-8'>
                        <div>
                        <p className='text-3xl md:text-5xl  opacity-50 font-bold'>01</p>

                        <div>
                            <h1 className='text-base sm:text-lg font-extrabold'>Bold Flavors, Homemade Vibes</h1>
                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>At CravyKitchen, we blend bold, global flavors with the warmth of home cooking. 
                                Whether you're here for a quick recipe or a deep culinary dive, we’ve got your cravings covered.</p>
                        </div>
                        </div>
                    </div>


                    <div className='mt-8'>
                        <div>
                        <p className='text-3xl md:text-5xl  opacity-50 font-bold'>02</p>

                        <div>
                            <h1 className='text-base sm:text-lg font-extrabold'>Simple Recipes, Crave-Worthy Results</h1>
                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>Our recipes are designed for real life — easy-to-follow, deliciously satisfying, and made with ingredients you actually have.</p>
                        </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <div>
                        <p className='text-3xl md:text-5xl  opacity-50 font-bold'>03</p>

                        <div>
                            <h1 className='text-base sm:text-lg font-extrabold'>Food is a Feeling</h1>
                            <p className='mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>We believe food should spark joy, connection, and nostalgia. CravyKitchen is more than a kitchen — it's a space to celebrate cravings, culture, and creativity.</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About