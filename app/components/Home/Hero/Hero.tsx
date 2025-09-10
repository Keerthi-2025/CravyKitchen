import Image from 'next/image'
import React from 'react'
import { FaApple, FaGooglePlay, FaLocationArrow } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

function Hero() {
    return (
        <div className='relative w-full h-screen flex items-center'>
            <div className='w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10'>


                
                {/* Text content */}
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4'>
                        Craving something? <span className='text-green-400'>Get it delivered</span> to your home.
                    </h1>
                    <p className='text-green-400 font-semibold mb-6'>Because cravings can’t wait!</p>

                    {/* Address input */}
                     <div className='w-fit mt-8 mb-8 max-w-md'>
                  <div className='flex items-center bg-gray-250 p-2 h-14 shadow-xl rounded-lg dark:shadow-none dark:ring-2 dark:ring-white gap-8'>
                       <div className='px-4'>
                           <GrMapLocation className='w-5 h-5 text-black dark:text-white' />
                        </div>
                        <input
                            type='text'
                            placeholder='Enter Address'
                            className='bg-transparent outline-none flex-1'
                        />
                        <button className='h-fit p-4 dark:text-white'>
                            <FaLocationArrow className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                    <p className='font-semibold dark:text-white mb-2'>App available to download on</p>
                    <div className='flex space-x-4'>
                        <a href="#" className='flex items-center space-x-4 w-55 group border border-gray-250 p-2 rounded-md'>
                            <FaApple className='w-10 h-10 dark:text-white' />
                            <p className='font-bold dark:text-white'>Download on the App Store</p>
                        </a>
                        <a href="#" className='flex items-center space-x-4  w-55 group border border-gray-250 p-2 rounded-md'>
                            <FaGooglePlay className='w-10 h-10 dark:text-white' />
                            <p className='font-semibold dark:text-white'>Available on Google Play</p>
                        </a>
                    </div>
                </div>

                {/* Image content */}
                <div  className='hidden xl:block'>
                    <Image
                        src="/main.jpg"
                        alt="image"
                        width={500}
                        height={500}
                        className="object-contain " 
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero
