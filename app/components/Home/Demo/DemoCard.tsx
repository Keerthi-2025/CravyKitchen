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
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default DemoCard