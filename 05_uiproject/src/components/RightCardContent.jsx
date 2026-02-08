import React from 'react'

const RightCardContent = (props) => {
  return (
    
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-relaxed font-bold text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat quia nulla, voluptatum sequi quasi praesentium.</p>
          <div className='flex justify-between'><button className='bg-blue-600 text-white font-semibold px-6 py-3 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'>➝</button></div>
        </div>
      </div>
      
  )
}

export default RightCardContent