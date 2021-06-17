import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'
import AddTasks from './Components/AddTasks'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    { 
        id: '1',
        text: 'Valorant Game',
        day: 'April 28 at 12:30 pm' ,
        reminder : true,
         
    },
    { 
        id: '2',
        text: 'Studying for exams',
        day: 'April 30 at 11:30 pm' ,
        reminder : true,
         
    },
    { 
        id: '3',
        text: 'Little home gym time',
        day: 'May 01 at 9:45 am' ,
        reminder : false,
         
    },
])
const addTask = (task) =>{
 const id = Math.floor(Math.random() * 10000) + 1
 const newTask= {id,...task}
 setTasks([...tasks,newTask])
}

const deleteTask = (id) => {
 setTasks(tasks.filter((task)=>(task.id!==id)))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}: task)
    )
}
  return (
    <div className='container'>
    <Header onAdd={()=>(setShowAddTask(!showAddTask))} showAdd={showAddTask}/>
    {showAddTask && <AddTasks onAdd={addTask}/>}
    {
    tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
    :'No more tasks'
    }
    </div>
  );
}

export default App;
