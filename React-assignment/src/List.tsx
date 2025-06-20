type Task = {
    id:number;
    text:string
}

interface listProps {
    tasks:Task[]
}
export default function List({tasks}:listProps) {
  
    return (
    <div> 
    To do:
        <ul className="list-group" >
            {tasks.map(task => 
            <div style={{display: "flex"}}>
            <li className="list-group-item">{task.text}</li> <input type="checkbox"></input>
            </div>)
            
            }
            
        </ul> 
    </div>
    )
}

