import Image from 'next/image';
import React from 'react'

type Props ={
    title: string;
    image:string;
}

function ResCard({image, title}:Props) {
  return (
    <div>
        <Image
        src={image}
        alt='images'
        width={400}
        height={400}
        className='w-full h-[250px] object-cover rounded-lg'
        />
 <h1 className='dark:hover:text-amber-100 hover:text-blue-950  transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold'>{title}</h1>
 <div className='flex items-center font-medium space-x-2'>
  <p className='bg-blue-950 text-white rounded-lg px-3 p-1 text-sm sm:text-base'>
    American
  </p>

  <p className='bg-blue-950 text-white rounded-lg px-3 p-1 text-sm sm:text-base'>
    Italian
  </p>
 </div>
    </div>
  )
}

export default ResCard