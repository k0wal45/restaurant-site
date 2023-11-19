import React from 'react'

const MenuItem = ({dish, onItemClick}) => {
  return (
    <li onClick={onItemClick} className="flex flex-col gap-8 w-full cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <h4 className="font-playfair-semibold text-2xl">{dish.name}</h4>
        <p className="font-playfair-semibold text-3xl text-orange-400">{dish.price}$</p>
      </div>
      <p className="text-xl text-gray-500">{dish.text}</p>
      
    </li>
  )
}

export default MenuItem
