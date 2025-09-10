import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props={
    title:string;
    username:string;
    userimage:string;
    review:string;
    role:string;
}

function ReviewCard({title, username, userimage, review, role}:Props) {
  return (
    <div className=' bg-gray-300 p-6 rounded-lg shadow-md dark:bg-gray-900'>
        
        <h1 className='text-xl font-bold'>
            {title}
        </h1>

        <div className='flex items-center'>
            <FaStar className='text-yellow-500 w-5 h-5'/>
            <FaStar className='text-yellow-500 w-5 h-5'/>
        </div>

        <p className='mt-4 text-base font-medium text-gray-800 dark:text-white min-h-[90px]'>{review}</p>
        {/* <p className=' bg-gray-300 dark:bg-gray-700 mt-6 mb-6 block h-[5px]'></p> */}

        <div>
            <div className='flex items-center space-x-4'>
                <Image
                src={userimage}
                alt='image'
                height={100}
                width={100}
                className='rounded-full w-16 h-16'/>
            </div>

             <div>
                <h1 className='text-lg font-bold'>{username}</h1>
                <p className='text-sm sm:text-base'>{role}</p>
             </div>
        </div>
        
    </div>
  )
}

export default ReviewCard