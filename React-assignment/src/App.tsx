// Write components, use props to pass data down 
// and customize
import { useEffect, useState } from "react"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import List from "./List"


// hard code
export type testInputType = {text:string,id:number}[]

const testInput: any[] | (() => any[]) = [
//   {text:"Laundry",
//    id: 0
// },
//   {text:"Homework",
//     id: 1
//   },
//   {text:"Dishes", 
//     id: 2
//   },
  

]

export default function App() {
   const [input, setInput] = useState(" ")
  const [tasks, setTasks] = useState(testInput)
  const [backgroundColor, setBackgroundColor] = useState('white');
;
  const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    
 setInput(e.target.value)
  }

  const addTask = () => {
    const newId = tasks.length;
   
    const task = {text:input,id:newId};

    
    
    setTasks([...tasks, task])
  }

  const deleteTask = () => {
    //When a user clicks the delete button, it should delete the last item in the tasks array
    //to-do figure out how to get the last item in an array and set it to the id .
    const id = tasks[tasks.length-1].id
    console.log(tasks.length-1)
    setTasks(tasks.filter(t => t.id !== id))
  }


useEffect(() => {
   document.body.style.backgroundColor = backgroundColor; },
    [backgroundColor])

    const changeColor = (color : string) => {
      setBackgroundColor(color)
    }


  

   return (
    <div className="container-fluid">
     <Input handleUserInput={handleUserInput} changeColor={changeColor}/>
     <SubmitButton deleteTask={deleteTask} addTask={addTask}/>
     <List tasks={tasks} />

     
    </div>
   )
  }
