import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center  mx-auto gap-8 bg-gray-900 p-4">
      <h1 className="text-6xl font-playfair-semibold lg:max-w-[60vw] text-white">Oops, you got lost. Go back to the main page or check out our menu.</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <Link to='/' className='bg-primary text-xl p-4 text-white font-bold '>Come Back Home</Link>
        <Link to='/menu' className='bg-primary text-xl p-4 text-white font-bold'>See Our Menu</Link>
      </div>
    </section>
  )
}

export default NotFound
