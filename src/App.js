// CODE HERE IS JSX
//  class is now className
//  for is now htmlFor
import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

// function with hooks
function App() {
  // Can return only single components.
  // if no component wanted, return fragment. <>...</>. No div wrapping.


  // useState is false by default keep addTask hidden
  const [showAddTask, setShowAddTask] = useState(false)
  // STATE called 'tasks' with function to update the state called 'setTasks'
    //  state is immutable.
    const [tasks, setTasks] = useState(
      [
          {
              id : 1,
              text : 'Doctors Appointment',
              day : 'Feb 5th at 2:30pm',
              reminder : true,
          },
          {
              id : 2,
              text : 'Meeting at school',
              day : 'Feb 6th at 1:30pm',
              reminder : true,
          },
          {
              id : 3,
              text : 'Food Shopping',
              day : 'Feb 5th at 2:30pm',
              reminder : false,
          }
      ]
  )

  // DELETE TASK FUNCTION
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      // if the task id in the mapping matches the id passed in, switch reminder, else return only task
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    <Route path='/' exact render={(props) => (
      <>
      {/* %% is ternary operator. Check if true then do, if false, do nothing. */}
      {showAddTask && < AddTask onAdd={addTask} />}
      {/* states get passed down, actions get passed up. */}
      {/* onDelete is prop passed down and finally called in Task.js by onClick. Action returned here and function deleteTask called */}
      { tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) : ( 'No Tasks' )}
      {/* match slash exactly */}
      </>
    )} />
    <Route path='/about' component={About} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
