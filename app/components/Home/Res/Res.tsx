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
                title="Biryani Adda"
                />
            </div>

            <div>
                <ResCard
                image ="/rice.jpg"
                title="Rice Bowl"
                />
            </div>

            <div>
                <ResCard
                image ="/juice.jpg"
                title="Fresh Squeeze"
                />
            </div>

            <div>
                <ResCard
                image ="/pasta.jpg"
                title="The Spaghetti Corner"
                />
            </div>

            <div>
                <ResCard
                image ="/chapati.jpg"
                title="Tandoor Tales"
                />
            </div>

            <div>
                <ResCard
                image ="/pizza.jpg"
                title="Cheesy Crust"
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