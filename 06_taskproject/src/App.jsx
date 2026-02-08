import { useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'

const App = () => {

  const [tasklist, setTasklist] = useState([])
  const addtask = (task)=>{
    setTasklist([...tasklist,task])
      console.log("Task received in App:", task);

  }
  return (
    <div>
     <Taskform addtask={addtask}/>
     <Tasklist tasklist={tasklist}/>
    </div>
  )
}

export default App