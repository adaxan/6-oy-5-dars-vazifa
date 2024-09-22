import React from 'react'

function Card(props) {
  const {task, id} = props.task;
  const {deleteTask} = props;
  return (
    <div className='bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center'>
      <h2 className='text-purple-400'>{task}</h2>
      <button onClick={() => {deleteTask(id)}} className='bg-gray-700 text-purple-400 p-4 rounded-md hover:bg-gray-900'>delete</button>
    </div>
  )
}

export default Card
