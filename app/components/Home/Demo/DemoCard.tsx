import Image from 'next/image';
import React from 'react'


type Props = {
    image:string;
    num:string;
    title:string;
    description:string;

}

function DemoCard({image,num,title,description}:Props) {
  return (
    <div>
        
        <div className='relative'>
            <Image
            src={image}
            alt='images'
            width={250}
            height={250}
            className='object-cover mx-auto'/>

            <div className=' w-14 h-14 text-black bg-pink-600  text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full'>
                {num}
            </div>
            <h1 className=' mt-6 text-lg sm:text-xl font-bold text-center'>{title}</h1>
            <p className='font-medium text-center dark:text-white'>{description}</p>

            <p className='font-bold mt-4 text-base dark:text-white text-center'>Start Earning &rarr;</p>
        </div>
    </div>
  )
}

export default DemoCard