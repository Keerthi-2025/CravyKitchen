"use client";

import { NavLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdDeliveryDining } from 'react-icons/md'

function Navbar() {
const [scrollbg, setScrollbg] = useState(false);

useEffect(()=>{
    const handler = () =>{
        if(window.scrollY >= 90) setScrollbg(true);
        if(window.scrollY < 90) setScrollbg(false);
    };

    window.addEventListener("scroll", handler);
    return() =>window.removeEventListener("scroll",handler);
},[])

    return (
<div className={`transition-all duration-200 h-[12vh] z-[100] w-full ${scrollbg ? "bg-white shadow-md fixed" : "fixed"}`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                <div className='hidden lg:flex items-center space-x-3'>

                    <div className='w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
                        <MdDeliveryDining className=' text-white w-8.5 h-8.5' />

                    </div>
                    <h1 className='text-xl font-extrabold  text-black '>CravyKitchen</h1>
                </div>

                <div className='flex items-center space-x-10' >
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className='text-black hover:text-green-600 font-bold transition-all duration-150'>

                                <p>{link.label}</p>

                            </Link>
                        );

                    })}

                </div>

                <div className='flex items-center space-x-2'>

                    <button className='font-semibold bg-blue-950 text-white rounded-2xl p-2 hover:bg-white hover:text-black cursor-pointer'>Join Now</button>

                    <HiBars3BottomRight className='text-semibold w-8 h-8 space-x-2 lg:hidden'/>
                </div>


            </div>

        </div>
    )
}

export default Navbar