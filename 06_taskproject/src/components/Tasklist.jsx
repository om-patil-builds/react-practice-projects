import React, { useState } from 'react'

const Tasklist = ({tasklist}) => {
  return (
    <div>
   {tasklist.map((elem,idx)=>(
    <div key={idx}>{elem}</div>
   ))}
    </div>
  )
}

export default Tasklist