
export default function Input({input}: {input:string}) {
    return (
        <div>
            <form>
                <label htmlFor="tasks">Tasks:</label>
                <input type="text" id="tasks" name="tasks"/>
                
            </form>
        </div>
    )
}