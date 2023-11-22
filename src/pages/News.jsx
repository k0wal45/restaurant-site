import React from 'react'
import Footer from '../components/Footer'

import carmel from '../assets/img/menu/carmelCheesecake.webp'
import avocado from '../assets/img/menu/avocadoShrimp.webp'
import filet from '../assets/img/menu/filetMushrooms.webp'
import redwine from '../assets/img/menu/redWine.webp'
import coconut from '../assets/img/menu/coconutShrimp.webp'
import porkchop from '../assets/img/menu/porkChop.webp'
import tiramisu from '../assets/img/menu/tiramisu.webp'
import bruschetta from '../assets/img/menu/bruschettaTomatoes.webp'
import beef from '../assets/img/menu/beefSoup.webp'
import asparagus from '../assets/img/menu/asparagusCrea.webp'

const News = () => {

  const events = [
    {
      title: 'Seafood Extravaganza',
      address: '456 Ocean Avenue, Miami, FL, United States',
      time: '18:00 - 22:00',
      date: 'Saturday, March 18th, 2023',
      photo: carmel
    },
    {
      title: 'Vegetarian Delights Showcase',
      address: '789 Greenway Lane, San Francisco, CA, United States',
      time: '13:00 - 17:00',
      date: 'Sunday, April 9th, 2023',
      photo: avocado
    },
    {
      title: 'Grilling Masterclass - BBQ Bonanza',
      address: '101 Grill Haven, Austin, TX, United States',
      time: '15:30 - 19:30',
      date: 'Saturday, May 20th, 2023',
      photo: filet
    },
    {
      title: 'Sweet Tooth Paradise - Dessert Festival',
      address: '234 Sugar Street, Chicago, IL, United States',
      time: '14:00 - 18:00',
      date: 'Sunday, June 15th, 2023',
      photo: redwine
    },
    {
      title: 'International Flavors Fiesta',
      address: '345 Spice Boulevard, Los Angeles, CA, United States',
      time: '17:00 - 21:00',
      date: 'Saturday, July 8th, 2023',
      photo: coconut
    },
    {
      title: 'Sip & Savor - Wine Tasting Gala',
      address: '567 Vineyard Road, Napa Valley, CA, United States',
      time: '16:30 - 20:30',
      date: 'Sunday, August 12th, 2023',
      photo: porkchop
    },
    {
      title: 'Culinary Arts Exhibition',
      address: '789 Artisan Lane, New Orleans, LA, United States',
      time: '12:00 - 16:00',
      date: 'Saturday, September 23rd, 2023',
      photo: tiramisu
    },
    {
      title: 'Farm-to-Table Harvest Feast',
      address: '890 Orchard Grove, Portland, OR, United States',
      time: '19:00 - 23:00',
      date: 'Sunday, October 15th, 2023',
      photo: bruschetta
    },
    {
      title: 'Holiday Spice Market',
      address: '123 Festive Street, Boston, MA, United States',
      time: '14:00 - 18:00',
      date: 'Saturday, November 18th, 2023',
      photo: beef
    },
    {
      title: 'Culinary Countdown to the New Year',
      address: '456 Celebration Avenue, Las Vegas, NV, United States',
      time: '20:00 - 01:00',
      date: 'Monday, December 31st, 2023',
      photo: asparagus
    }
  ];

  return (
    <main className='w-screen overflow-x-hidden'>
      <section className="w-screen h-[50vh] grid place-items-center bg-photo">
        <h1 className="text-8xl font-playfair-semibold text-white">News</h1>
      </section>
      <section className="flex flex-col justify-center items-center p-4 py-12 gap-8 bg-paper">

        {
          events.map((newsItem) => (
            <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse justify-center bg-base-100 w-2/3 shadow-xl">
              <img src={newsItem.photo} alt="Taste Courtyard Dish" className="object-cover h-[25rem] aspect-square" />
              <div className="flex flex-col gap-4 w-full items-center justify-center text-center">
                <h8 className="text-4xl font-playfair-semibold">{newsItem.title}</h8>
                <p className="text-gray-400 text-xl">---------</p>
                <p className="text-gray-400 text-xl">{newsItem.address}</p>
                <p className="text-gray-400 text-xl">{newsItem.time}</p>
                <p className="text-gray-400 text-xl">{newsItem.date}</p>
              </div>
            </div>
          ))
        }


        
      </section>
      <Footer />
    </main>
  )
}

export default News
