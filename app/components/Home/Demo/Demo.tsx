import React from 'react'
import DemoCard from './DemoCard'

function Demo() {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-extrabold'>Let us see how it Works!</h1>
      
       <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>

        <div>

            <DemoCard 
            num ="01"
            image="/hotel.jpg"
            title="Browse Restaurants"
            description="Explore a wide range of nearby restaurants offering pasta, pizza, biryani, juices, chapati, and more. "
           />
        </div>

        <div>

            <DemoCard 
            num ="02"
            image="/main.jpg"
            title="Fast Delivery"
            description="Sit back and relax while our delivery partner brings hot and fresh food right to your doorstep."
            />
        </div>

        <div>

            <DemoCard 
            num ="03"
            image="/order.jpg"
            title="Place Your Order"
            description="Pick your favorite dishes, customize them, and place your order in just a few clicks."
            />
        </div>


       </div>

        
    </div>
  )
}

export default Demo