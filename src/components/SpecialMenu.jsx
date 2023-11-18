import React from 'react'
import MenuCard from './subcomponents/MenuCard'

import cheff from '../assets/img/cheffcooking.webp'


const SpecialMenu = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto p-4 mt-12">
        <p className='section-title'>Special menu</p>
        <h4 className="section-heading text-center">delicious flavour of autumn</h4>
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <MenuCard
            name='Coconut Shrimp'
            text='Delicate shrimp immersed in coconut sauce, served with crunchy baguette.'
            cost='25'
            photo={cheff}
          />
          <MenuCard
            name='Coconut Shrimp'
            text='Delicate shrimp immersed in coconut sauce, served with crunchy baguette.'
            cost='25'
            photo={cheff}
          />
          <MenuCard
            name='Coconut Shrimp'
            text='Delicate shrimp immersed in coconut sauce, served with crunchy baguette.'
            cost='25'
            photo={cheff}
          />
        </div>
        <div className="btn btn-primary font-playfair text-xl uppercase rounded-none mt-12">view full menu</div>
    </section>
  )
}

export default SpecialMenu
