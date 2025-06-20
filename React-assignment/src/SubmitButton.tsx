

type ButtonProps = {
    addTask: ()=>void
    deleteTask: ()=>void
}
export default function SubmitButton({addTask, deleteTask}:ButtonProps) {
    
    return (
        <>
      
            <div className="mx-auto" >
            {/* <button className="btn" id="submitButton" >
                Submit
            </button> */}
            <button className="btn" id="addButton" onClick={addTask}>
                Add
            </button>
            <button className="btn" id="deleteButton" onClick={deleteTask}>
                Delete
            </button>
        </div>
       
        </>
    )
}
