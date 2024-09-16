import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8'>
            <div className='md:w-1/2'>
                    <img src="images/banner.png" alt=""/>
                    <div className="flex flex-col md:flex-row items-center justify-around -mt-5 gap-0">
            <div className="bg-yellow px-2 py-1 rounded-2xl flex items-center gap-5 shadow-sm w-64">
              <img src="/images/food1.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-0">
                <h5>Bengali Thali</h5>
                <div className="rating rating-sm">
              
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-secondary">₹399.00</p>
              </div>
            </div>
            <div className="bg-yellow px-3 py-1 rounded-2xl md:flex items-center gap-5 shadow-sm w-64 hidden">
              <img src="/images/food2.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-0">
                <h5>Chinese Combo</h5>
                <div className="rating rating-sm">
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-secondary">₹299.00</p>
              </div>
              </div>
              </div>            
            </div>
            <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-6xl text-3xl font-intern md:leading-snug leading-snug">
        Embracing the symphony of tastes on      
        <span className="text-red"> your plate</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-red font-semibold btn text-yellow px-5 py-1 rounded-full">
            Order Now
          </button>
        </div>


           

    </div>
</div>
  )
}

export default Banner