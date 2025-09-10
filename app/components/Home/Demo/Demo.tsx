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
            image="/main.jpg"
            title="Be the Delivery Guy"
            description="As a delivery driver, you will make reliable money-working anytime,anywhere "
           />
        </div>

        <div>

            <DemoCard 
            num ="02"
            image="/main.jpg"
            title="Be the Delivery Guy"
            description="As a delivery driver, you will make reliable money-working anytime,anywhere"
            />
        </div>

        <div>

            <DemoCard 
            num ="03"
            image="/main.jpg"
            title="Be the Delivery Guy"
            description="As a delivery driver, you will make reliable money-working anytime,anywhere"
            />
        </div>


       </div>

        
    </div>
  )
}

export default Demo