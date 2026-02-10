import React, { useState } from 'react'

const Taskform = ({ addtask }) => {
  const [task, setTask] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    addtask(task)
    setTask('')
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button>Add</button>
    </form>
  )
}

export default Taskform
