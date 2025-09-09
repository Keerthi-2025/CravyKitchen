import React from 'react'
import ResCard from './ResCard'

function Res() {
  return (
    <div className='pt-16 pb-16'>
        
        {/* section  */}
        <div className='text-xl font-semibold text-center sm:text-2xl'>
            Available Resturants NearBy Area
        </div>

        <div className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14'>
            <div>
                <ResCard
                image ="/biryani.jpg"
                title="Biryani special"
                />
            </div>

            <div>
                <ResCard
                image ="/rice.jpg"
                title="Steamy Fluffy Rice"
                />
            </div>

            <div>
                <ResCard
                image ="/juice.jpg"
                title="Refreshing Natural Juices"
                />
            </div>

            <div>
                <ResCard
                image ="/pasta.jpg"
                title="Authentic Italian Pasta"
                />
            </div>

            <div>
                <ResCard
                image ="/chapati.jpg"
                title="Freshly Made Chapati"
                />
            </div>

            <div>
                <ResCard
                image ="/pizza.jpg"
                title="Hot & Cheesy Pizza"
                />
            </div>
        </div>

        <div className=' mt-10 flex justify-center'>
            <button className='bg-blue-950  font-semibold text-white   items-center rounded-full text-base sm:text-lg px-2 py-2' >Explore More &rarr;</button>
        </div>
    </div>
  )
}

export default Res