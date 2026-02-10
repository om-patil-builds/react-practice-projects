import React from 'react'

const Tasklist = ({ tasklist, deleteTask }) => {
  return (
    <div>
      {tasklist.map(task => (
        <div key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
      ))}
    </div>
  )
}

export default Tasklist
