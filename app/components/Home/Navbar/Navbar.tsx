"use client";

import { NavLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MdDeliveryDining } from 'react-icons/md'
import ThemeToggler from '../../Helper/ThemeToggler';


type Props = {
    openNav:()=>void
}


function Navbar({openNav } :Props) {
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
<div className={`transition-all duration-200 h-[12vh] z-[100] w-full ${scrollbg ? "bg-white  dark:bg-gray-300 shadow-md fixed" : "fixed"}`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

                <div className='hidden lg:flex items-center space-x-3'>

                    <div className='w-12 h-12 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center flex-col'>
                        <MdDeliveryDining className=' text-white dark:text-black w-8.5 h-8.5' />

                    </div>
                    <h1 className='text-xl font-extrabold dark:text-white text-black '><span className='text-green-500'>Cravy</span>Kitchen</h1>
                </div>

                <div className='flex items-center space-x-10' >
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className='text-black dark:text-white hover:text-green-600  font-bold transition-all duration-150'>

                                <p>{link.label}</p>

                            </Link>
                        );

                    })}

                </div>

                <div className='flex items-center space-x-2'>

                    <button className='font-semibold bg-blue-950 dark:bg-white dark:text-black  text-white rounded-lg p-2 cursor-pointer'>Join Now</button>
                        <ThemeToggler/>
                    <HiBars3BottomRight onClick={openNav} className='text-semibold w-8 h-8 space-x-2 lg:hidden'/>
                </div>


            </div>

        </div>
    )
}

export default Navbar