import React from 'react'

const categoryItems = [
    {id: 1, title: "Main Dish", description: "(86 Main dishes)", image: "/categories/maindish.png"},
    {id: 2, title: "Starter", description: "(12 Starters)", image: "/categories/starter.png"},
    {id: 3, title: "Dessert", description: "(48 desserts)", image: "/categories/dessert.png"},
    {id: 4, title: "Browse All", description: "(255 Items)", image: "/categories/browse.png"}
]

const Categories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 categories-section'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-yellow py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
                        <div className='w-full mx-auto flex items-center justify-center'>
                            <img src={item.image} alt={item.title} className='bg-[#ff797983]  p-4 rounded-full w-28 h-28' />
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories;
