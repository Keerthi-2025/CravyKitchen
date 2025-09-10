import Image from 'next/image';
import React from 'react'

type Props ={
    icon:string;
    title:string;
    description:string;
}



function FeatureCard({icon,title,description}:Props) {
  return (
    <div>
        <Image 
        src={icon}
        alt='iconsimage'
        width={100}
        height={100} 
        className='mx-auto object-cover'/>

        <h1 className='text-center font-bold mt-1 dark:text-white'>{title}</h1>
        <p className='text-center font-medium text-gray-700 dark:text-white'>{description}</p>
    </div>
  )
}

export default FeatureCard