"use client";
import React from 'react'


const categories = [
    {
        name:"Pasta"
    },
    {
        name:"Pizza"
    },
    {
        name:"Indian"
    },
    {
        name:"chinese"
    },
    {
        name:"Thai"
    },
    {
        name:"Italian"
    },
    {
        name:"American"
    },
    {
        name:"Japanese"
    },
    {
        name:"Mexican"
    },
    {
        name:"Burgers"
    },
    {
        name:"Desert"
    },
    {
        name:"Greek"
    },
    {
        name:"Breakfast"
    },
    {
        name:"Lunch"
    }
];

function cat() {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-semibold'>Popular Categories</h1>

        <div className='mx-auto mt-10 w-[60%]'>
            <div className='flex flex-wrap gap-4 justify-center'>
                {categories.map((cat, i)=>{
                    return(
                        <span className='p-2.5 rounded-full bg-blue-950 cursor-pointer font-semibold space-x-2 text-white dark:hover:bg-blue-500 hover:bg-green-500'>
                         {cat.name}
                        </span>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default cat