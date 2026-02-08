import React, { useState } from 'react'

const Taskform = ({addtask}) => {
    
 const [task, setTask] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        addtask(task)
        setTask('')
        
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Your Task' value={task} onChange={(e)=>{
                setTask(e.target.value)
            }}/>
            <button>AddTask</button>
        </form>

    </div>
  )
}

export default Taskform