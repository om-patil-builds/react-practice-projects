import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  //console.log(props.c)
  return (
    <div className='h-full w-70 rounded-4xl relative overflow-hidden shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />

     <RightCardContent tag={props.tag} id={props.id}/>

    </div>
  )
}


export default RightCard 