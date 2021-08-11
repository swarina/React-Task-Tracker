import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = ({ tasks, onDelete }) => {

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App;
