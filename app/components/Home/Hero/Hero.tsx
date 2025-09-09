import React from 'react'
import { FaApple, FaGooglePay, FaGooglePlay, FaLocationArrow } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

function Hero() {
    return (
        <div className=' relativenw-full h-screen flex justify-center flex-col'>

            <div className='w-[90%] md:w-[90%] mx-auto grid items-center grid-cols-2 xl:grid-cols-2 gap-10'>
                <div>


                    <h1 className='text-3xl md:text-4xl lg:text-5xl mt-5 mb-6 font-extrabold '>Craving something? <span className='text-green-400'>Get it delivered</span> to your home.</h1>

                    <p className='text-green-400 font-semibold dark:text-white'>Because cravings can’t wait !</p>

                    {/* addresss input */}
                    <div className='w-fit   mt-8 mb-8 max-w-md'>
                        <div className='flex items-center bg-gray-250 p-2 h-14 shadow-xl  rounded-lg dark:shadow-none dark:ring-2 dark:ring-white gap-8'>
                            <div className='px-4'>
                                <GrMapLocation className='w-5 h-5 text-black dark:text-white' />
                            </div>
                            <input type='text'
                                placeholder='Enter Address'
                                className=' bg-transparent outline-none' />

                            <button className=' h-fit p-4 dark:text-white '>
                                <FaLocationArrow className='w-4 h-4' />
                            </button>
                        </div>


                    </div>

                   
                    <p className=' font-semibold dark:text-white mt-10 mb-2'>App available to download on </p>
                    <div className='flex space-x-4 flex-wrap'>
                        <a href="# " className=' space-x-4 flex items-center group border border-gray-250 p-1 rounded-md h-15 w-50'>
                            <FaApple className='w-10 h-10  dark:text-white' />
                            <p className='font-bold dark:text-white'>Download on the App store</p>
                        </a>
                  


                   
                        <a href='#' className='space-x-4 flex items-center  group border border-gray-250 p-2 rounded-md h-15 w-55'>
                            <FaGooglePlay className='w-12 h-12 dark:text-white'/>
                            <p className='font-semibold'>Available on Google Play Store</p>
                        </a>
                    </div>
                    







                </div>

            </div>


        </div>
    )
}

export default Hero