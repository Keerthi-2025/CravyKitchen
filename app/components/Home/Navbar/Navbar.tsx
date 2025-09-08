import { NavLinks } from '@/app/constant/constant'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

function Navbar() {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[100] fixed w-full'>
    <div  className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

<div className='hidden lg:flex items-center space-x-3'>
 
 <div className='w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
<MdDeliveryDining className=' text-white w-8.5 h-8.5'/>

 </div>
 <h1 className='text-xl font-extrabold  text-black '>CravyKitchen</h1>
</div>

<div className='flex items-center space-x-10' >
    {NavLinks.map((link) =>{
        return(
            <Link
            key={link.id}
            href={link.url}
            className='text-black hover:text-green-600 font-bold transition-all duration-150'>

                <p>{link.label}</p>
                
            </Link>
        );

    })}

</div>
    </div>
    
    </div>
  )
}

export default Navbar