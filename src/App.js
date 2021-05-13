import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from 'react-router-dom'

//useEffect to make side effects as the -- database requests


import { useState , useEffect } from "react";


//installed npm i react-icons 
//npm i json-server for this add a line server in the package.json

//so we use npm run server to run json backend the mock backend
//for sake of inline we use double brackets {{}}

//for sake of routing we install react-router-dom


function App() {
  const name = "mahendra";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //to fetch a single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  // add Task for the raw data
  // const addTask = (task) => {
  //    console.log(task);
  //   const id = Math.floor(Math.random() * 10000)+1;
  //   const newTask = {id, ...task}
  //   setTasks([...tasks, newTask])
  // }

  //add Task from the server
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  //delete Task with raw data
  // const deleteTask = (id) => {
  //  console.log("delete",id);
  //  setTasks(tasks.filter((task) => task.id !== id))
  // }

  // deleteTask for the async function
   // Delete Task
   const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

// toggle reminder with raw data
  // const toggleReminder = (id) => {
  //    console.log(id);
  //   setTasks(tasks.map(
  //     (task) => task.id === id ? {...task,reminder: !task.reminder} : task
  //   ))
  // }

  //toggle reminder for the server data
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    //here we have the thing that is with the raw data without the original router.
    // <div className="container">
    //   <Header title="Task Tracker" onAdd ={ () => setShowAddTask(!showAddTask) } showAdd = {showAddTask}/>
    //   {showAddTask && <AddTask onAdd = {addTask}/>}
    //   { tasks.length > 0 ?
    //   <Tasks tasks = {tasks} onDelete = { deleteTask } onToggle = { toggleReminder }/>
    //   : 'No tasks to show yet!!'
    //   }{/* <h1>Hello from React</h1>
    //   <h2>Hello {name}</h2> */}
    //   <Footer />
    // </div> 
    <Router>
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Route
        path='/'
        exact
        render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              'No Tasks To Show'
            )}
          </>
        )}
      />
      <Route path='/about' component={About} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;

