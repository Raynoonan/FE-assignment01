// Write components, use props to pass data down 
// and customize
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import List from "./list"

const testInput = ["test input"]

export default function App() {
   return (
    <div className="container-fluid">
     <Input input="text"/>
     <SubmitButton onClick={() => alert("submitted!")}/>
     <List input={testInput}/>
    </div>
   )
}