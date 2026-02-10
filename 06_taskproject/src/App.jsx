import React, { useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'

const App = () => {
  const [tasklist, setTasklist] = useState([])

  const addtask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText
    }
    setTasklist(prev => [...prev, newTask])
  }

  const deleteTask = (id) => {
    setTasklist(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div>
      <Taskform addtask={addtask} />
      <Tasklist tasklist={tasklist} deleteTask={deleteTask} />
    </div>
  )
}

export default App
