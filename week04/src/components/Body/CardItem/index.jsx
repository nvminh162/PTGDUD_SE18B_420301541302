import React from 'react'
import food from '../../../assets/food/food01.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const foodItem = [
  { id: 1, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 2, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 3, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 4, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 5, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 6, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 7, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
  { id: 8, name: 'Italian - style tomato salad', time: '15 minutes', image: food },
]

const CardItem = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
      {foodItem.map(item => (
        <div key={item.id} className='w-[300px] rounded-md outline-1 outline-gray-300'>
          <img className='w-full object-cover' src={item.image} alt="food01" />
          <div className='relative p-5 space-y-2'>
            <h1 className='font-bold text-base'>{item.name}</h1>
            <span className='bg-pink-200 px-1.5 py-1 rounded-xl font-medium text-[10px] text-pink-400'>{item.time}</span>
            <div className='absolute top-5 right-5 outline-1 w-[30px] h-[30px] text-pink-400 outline-pink-400 p-2 rounded-full flex justify-center items-center bg-white'>
              <FontAwesomeIcon icon={faBookmark}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardItem
