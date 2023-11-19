import React from 'react'
import MenuCard from './subcomponents/MenuCard'

import dish1 from '../assets/img/menu/coconutShrimp.webp'
import dish2 from '../assets/img/menu/asparagusCrea.webp'
import dish3 from '../assets/img/menu/ravioli.webp'
import { Link } from 'react-router-dom'


const SpecialMenu = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto p-4 mt-12">
        <p className='section-title'>Special menu</p>
        <h4 className="section-heading text-center">delicious flavour of autumn</h4>
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <MenuCard
            name='Coconut Shrimp'
            text='Delicate shrimp immersed in coconut sauce, served with crunchy baguette.'
            cost='22'
            photo={dish1}
          />
          <MenuCard
            name='Asparagus Cream Soup'
            text='Velvety asparagus cream soup, served with garlic croutons.'
            cost='14'
            photo={dish2}
          />
          <MenuCard
            name='Ravioli with Ricotta and Spinach in Cream Sauce'
            text='Delicate ravioli with ricotta and spinach in creamy Alfredo sauce.'
            cost='28'
            photo={dish3}
          />
        </div>
        <Link to='/menu' className="btn btn-primary font-playfair text-xl uppercase rounded-none mt-12">view full menu</Link>
    </section>
  )
}

export default SpecialMenu
