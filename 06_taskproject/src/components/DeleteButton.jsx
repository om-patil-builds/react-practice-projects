import React from 'react'

const DeleteButton = ({ id, deleteTask }) => {
  return (
    <button onClick={() => deleteTask(id)}>
      ❌
    </button>
  )
}

export default DeleteButton
