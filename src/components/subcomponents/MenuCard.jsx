import React from 'react'

const MenuCard = ({name, text, cost, photo}) => {
  return (
    <div className='flex flex-col w-80 shadow-xl'>
      <div className="relative">
        <img src={photo} alt="The dish in Tasty Courtyard" className="w-80 h-64 object-cover" />
        <div className="grid place-items-center font-playfair text-4xl absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 scale-125 bg-white p-4 rounded-full aspect-square">
          <p className='translate-y-[-10%]'>{cost}$</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-8 py-8 pt-12">
        <h6 className="font-playfair-semibold text-2xl">{name}</h6>
        <p className="font-playfire text-lg text-gray-500">{text}</p>
      </div>
    </div>
  )
}

export default MenuCard
