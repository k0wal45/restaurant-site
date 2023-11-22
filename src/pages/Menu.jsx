import { useState } from 'react'
import MenuItem from '../components/subcomponents/MenuItem'
import logo from '../assets/img/logo.webp'
import { Link } from 'react-router-dom'

// starters photos
import coconutShrimp from '../assets/img/menu/coconutShrimp.webp'
import salmonCarpaccio from '../assets/img/menu/salmonCarpaccio.webp'
import salmonAndShrimps from '../assets/img/menu/salmonAndShrimp.webp'
import bruschettaTomatos from '../assets/img/menu/bruschettaTomatoes.webp'

// soups photos
import pumpkinSeeds from '../assets/img/menu/pumpkinSeeds.webp'
import asparagus from '../assets/img/menu/asparagusCrea.webp'
import beefSoup from '../assets/img/menu/beefSoup.webp'

// main courses photos
import filetMushrooms from '../assets/img/menu/filetMushrooms.webp'
import ravioli from '../assets/img/menu/ravioli.webp'
import porkChop from '../assets/img/menu/porkChop.webp'
import avocadoShrimp from '../assets/img/menu/avocadoShrimp.webp'

// deserts photos
import raspberryPannaCotta from '../assets/img/menu/raspberryPannaCotta.webp'
import tiramisu from '../assets/img/menu/tiramisu.webp'
import carmelCheesecake from '../assets/img/menu/carmelCheesecake.webp'

// bevrages photos
import mangoCoctail from '../assets/img/menu/mangoCoctail.webp'
import redWine from '../assets/img/menu/redWine.webp'
import coffee from '../assets/img/menu/coffee.webp'



const Menu = () => {

  const date = new Date()
  const year = date.getFullYear()
  

  const [currentDish, setCurrentDish] = useState({
    name: 'Coconut Shrimp',
    text: 'Delicate shrimp in coconut sauce, served with baguette.',
    photo: coconutShrimp,
    price: '22',
  })

  const starters = [
    {
      name: 'Coconut Shrimp',
      text: 'Delicate shrimp in coconut sauce, served with baguette.',
      photo: coconutShrimp,
      price: '22',
    },
    {
      name: 'Salmon Carpaccio',
      text: 'Thinly sliced salmon with lemon-dill sauce, arugula, and parmesan. ',
      photo: salmonCarpaccio,
      price: '18',
    },
    {
      name: 'Salmon and Shrimp Dumplings',
      text: 'Dumplings filled with salmon and shrimp, served with creamy dill sauce.',
      photo: salmonAndShrimps,
      price: '22',
    },
    {
      name: 'Bruschetta with Tomatoes and Basil',
      text: 'Classic Italian bruschetta with fresh tomatoes, basil, and olive oil.',
      photo: bruschettaTomatos,
      price: '15',
    }
  ]

  const soups = [
    {
      name: 'Pumpkin Cream Soup with Roasted Pumpkin Seeds',
      text: 'Creamy pumpkin soup with crispy roasted pumpkin seeds.',
      photo: pumpkinSeeds,
      price: '12',
    },
    {
      name: 'Asparagus Cream Soup',
      text: 'Velvety asparagus cream soup, served with garlic croutons.',
      photo: asparagus,
      price: '14',
    },
    {
      name: 'Chilled Beef Soup',
      text: 'Traditional beef soup with cucumber, egg, and dill.',
      photo: beefSoup,
      price: '22',
    },

  ]

  const mainCourses = [
    {
      name: 'Filet Mignon with Porcini Mushroom Sauce',
      text: 'Juicy filet mignon with porcini mushroom sauce and potato puree',
      photo: filetMushrooms,
      price: '35',
    },
    {
      name: 'Ravioli with Ricotta and Spinach in Cream Sauce',
      text: 'Delicate ravioli with ricotta and spinach in creamy Alfredo sauce. ',
      photo: ravioli,
      price: '28',
    },
    {
      name: 'Viennese-style Breaded Pork Chop',
      text: 'Traditional Viennese-style breaded pork chop with potatoes and sauerkraut. ',
      photo: porkChop,
      price: '25',
    },
    {
      name: 'Shrimp and Avocado Salad',
      text: 'Fresh shrimp and avocado salad with lemon-herb dressing. ',
      photo: avocadoShrimp,
      price: '18',
    },

  ]

  const deserts = [
    {
      name: 'Raspberry Panna Cotta with Red Wine Sauce',
      text: 'Delicate raspberry panna cotta with red wine sauce.',
      photo: raspberryPannaCotta,
      price: '10',
    },
    {
      name: 'Classic Tiramisu with a Hint of Coffee',
      text: 'Traditional tiramisu with mascarpone cream and cocoa. ',
      photo: tiramisu,
      price: '12',
    },
    {
      name: 'New York Style Cheesecake with Caramel Sauce',
      text: 'Classic New York-style cheesecake with caramel sauce. ',
      photo: carmelCheesecake,
      price: '14',
    },

  ]

  const beverages = [
    {
      name: 'Mango and Mint Cocktail',
      text: 'Refreshing cocktail with mango, mint, and lime juice.',
      photo: mangoCoctail,
      price: '8',
    },
    {
      name: 'Red Wine',
      text: 'Selected red wine, perfect for meat dishes. ',
      photo: redWine,
      price: '30',
    },
    {
      name: 'Lavazza Coffee',
      text: 'Excellent Lavazza coffee, served hot or cold.',
      photo: coffee,
      price: '5',
    },

  ]


  const handleMenuItemClick = (dish) => {
    setCurrentDish(dish)
  };

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row text-white">
      <img src={currentDish.photo} alt="Tasty Courtyard dish" className='object-cover brightness-50 hidden lg:block absolute top-0 left-0 z-10 w-[50vw] h-full'/>
      <section className="hidden top-0 left-0 lg:flex flex-col h-screen w-[50vw] z-20 pt-32 justify-between items-start">
        <h1 className="text-5xl font-playfair-semibold p-4 bg-neutral-900 bg-opacity-40">{currentDish.name}</h1>
        <div className="flex flex-col justify-start items-start p-8 bg-neutral-900 bg-opacity-40 w-full gap-4">
          <span className="text-5xl font-playfair-semibold">{currentDish.price}$</span>
          <p className="text-2xl font-playfair">{currentDish.text}</p>
        </div>
      </section>

      <img src={currentDish.photo} alt="Tasty Courtyard dish" className='block lg:hidden w-full max-h-[35vh] min-h-[35vh] object-cover'/>
      <section className="
        h-screen overflow-y-scroll lg:w-[50vw] z-10 top-0 right-0 bg-neutral-900
        flex flex-col justify-start items-start gap-8 lg:pt-24
      ">
        <div className="flex gap-8 items-center justify-start w-full px-8 py-4">
          <p className="text-4xl font-playfair-semibold">Starters</p>
          <div className="w-full border-[1px] border-gray-600 translate-y-2"></div>
        </div>
        <ul className="grid gap-16 lg:grid-cols-2 w-full px-16 py-4">
          {
            starters.map((dish) => (
              <MenuItem 
                dish={dish}
                onItemClick={() => handleMenuItemClick(dish)} 
              />
            ))
          }
          

        </ul>
        <div className="flex gap-8 items-center justify-start w-full px-8 py-4">
          <p className="text-4xl font-playfair-semibold">Soups</p>
          <div className="w-full border-[1px] border-gray-600 translate-y-2"></div>
        </div>
        <ul className="grid gap-16 lg:grid-cols-2 w-full px-16 py-4">
          {
            soups.map((dish) => (
              <MenuItem 
                dish={dish}
                onItemClick={() => handleMenuItemClick(dish)} 
              />
            ))
          }
          

        </ul>
        <div className="flex gap-8 items-center justify-start w-full px-8 py-4">
          <p className="text-4xl font-playfair-semibold">Main Courses</p>
          <div className="w-full border-[1px] border-gray-600 translate-y-2"></div>
        </div>
        <ul className="grid gap-16 lg:grid-cols-2 w-full px-16 py-4">
          {
            mainCourses.map((dish) => (
              <MenuItem 
                dish={dish}
                onItemClick={() => handleMenuItemClick(dish)} 
              />
            ))
          }
          

        </ul>
        <div className="flex gap-8 items-center justify-start w-full px-8 py-4">
          <p className="text-4xl font-playfair-semibold">Deserts</p>
          <div className="w-full border-[1px] border-gray-600 translate-y-2"></div>
        </div>
        <ul className="grid gap-16 lg:grid-cols-2 w-full px-16 py-4">
          {
            deserts.map((dish) => (
              <MenuItem 
                dish={dish}
                onItemClick={() => handleMenuItemClick(dish)} 
              />
            ))
          }
          

        </ul>
        <div className="flex gap-8 items-center justify-start w-full px-8 py-4">
          <p className="text-4xl font-playfair-semibold">Beverages</p>
          <div className="w-full border-[1px] border-gray-600 translate-y-2"></div>
        </div>
        <ul className="grid gap-16 lg:grid-cols-2 w-full px-16 py-4">
          {
            beverages.map((dish) => (
              <MenuItem 
                dish={dish}
                onItemClick={() => handleMenuItemClick(dish)} 
              />
            ))
          }
          

        </ul>
        <footer className="flex flex-col w-full">
          <div className="w-full min-h-[20rem] bg-neutral-950 flex flex-col gap-4 justify-center items-center text-white">
            <img src={logo} alt="Logo Tasty Courtyard" className='w-16'/>
            <ul className="flex flex-wrap justify-center items-center gap-8 p-4 text-lg">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/reservation">Reservation</Link>
              </li>

              
            </ul>
          </div>
          <section className="flex flex-col justify-center items-center p-4 bg-black shadow-inner z-70 text-gray-500">
            <div className="items-center grid-flow-col">
              <p>Copyright © {year}</p>
            </div> 
            <div>
              <p>Created by <a target="_blank" href="https://lunarisweb.pl/" className="underline" rel="noreferrer">Lunaris Web</a> - All right reserved</p>
            </div> 
          </section>
        </footer>
      </section>
    </main>
  )
}

export default Menu
