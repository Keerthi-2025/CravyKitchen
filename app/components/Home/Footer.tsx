// import React from 'react'
// import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'
// import { MdDeliveryDining } from 'react-icons/md'

// function Footer() {
//   return (
//     <div className='pt-16 pb-16 bg-gray-800'>
        
//         <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
//             <div>
//                 <div className='flex items-center space-x-2'>
//                     <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
//                         <MdDeliveryDining className='h-6 w-6 text-black'/>
//                     </div>

//                     <h1 className='text-xl text-white font-bold'>CravyKitchen</h1>
//                 </div>

//                 <p className='mt-4 text-white'>Delivering Cravings, One Bite at a Time</p>

//                 <div className=' mt-8  w-[80%] border-t pt-8 flex flex-col md:flex-row  justify-between  text-gray-600 text-sm mx-auto'>
//                     <p className='text-white text-center md:text-left whitespace-nowrap '>Copyright © 2025. All rights reserved</p>
//                     <div className='flex items-center space-x-4 mt-4 md:mt-0 text-white'>
//                        <span>Follow us: </span>
//                        <span><FaFacebook/></span>

                      
//                        <span><FaTwitter/></span>

                      
//                        <span><FaDribbble/></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'

function Footer() {
  return (
    <div className='pt-16 pb-16 bg-gray-800'>
      {/* Top Footer Section */}
      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start'>
        
        {/* Brand Info */}
        <div>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
              <MdDeliveryDining className='h-6 w-6 text-black' />
            </div>
            <h1 className='text-xl text-white font-bold'>CravyKitchen</h1>
          </div>

          <p className='mt-4 text-white'>Delivering Cravings, One Bite at a Time</p>
        </div>


      </div>

      {/* Bottom Footer: Copyright + Social Icons */}
      <div className='mt-8 border-t border-gray-600 pt-8 w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white'>
        
        {/* Copyright */}
        <p className='text-center md:text-left whitespace-nowrap'>
          © 2025 CrackyKitchen. All rights reserved.
        </p>
         <div>Brand Info</div>
  <div>Quick Links</div>
  <div>Contact Info</div>
  <div>Newsletter</div>

        {/* Social Icons */}
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
          <span className='text-sm'>Follow us:</span>
          <FaFacebook className='hover:text-blue-500 cursor-pointer' />
          <FaTwitter className='hover:text-sky-400 cursor-pointer' />
          <FaDribbble className='hover:text-pink-500 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Footer
