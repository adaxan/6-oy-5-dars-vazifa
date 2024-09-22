import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState("");

  function handAdd(event) {
    event.preventDefault();

    const todoTasks = {
      task,
      id: Date.now()
    };

    let copied = [...tasks]
    copied.push(todoTasks)
    setTasks(copied)

    let storageTask = [];
    if(localStorage.getItem('tasks')) {
      storageTask = JSON.parse(localStorage.getItem('tasks'))
    }

    storageTask.push(todoTasks)
    localStorage.getItem('tasks', JSON.stringify(storageTask))

    setTask('')
  }

  function deleteTask(id) {
    let copyy = [...tasks]
    copyy = copyy.filter(function(value) {
      return value.id != id;
    })

    setTasks(copyy)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8">
      <form className="mb-8">
        <input
          type="text"
          onChange={(event) => {setTask(event.target.value)}}
          value={task}
          placeholder="Add new task"
          className="w-80 p-2 rounded-lg bg-gray-800 text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button onClick={handAdd} className="ml-4 p-2 pl w-10 text-1xl rounded-md bg-purple-500 text-white hover:bg-purple-600">+</button>
      </form>
      <div className="bg-gray-700 w-96 text-purple-300 p-4 rounded-md">
        {
          tasks.length > 0 && tasks.map(function(value, index) {  
            return <Card deleteTask = {deleteTask} task = {value} key={index}></Card>
          })
        }
      </div>
    </div>
  );
}

export default App;
