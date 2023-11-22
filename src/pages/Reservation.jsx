import React from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Map from '../components/Map'

const Reservation = () => {

  
  return (
    <main className='w-screen overflow-x-hidden'>
      <section className="w-screen h-[50vh] grid place-items-center bg-photo">
        <h1 className="text-5xl lg:text-8xl font-playfair-semibold text-white">Reservation</h1>
      </section>
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}

export default Reservation
