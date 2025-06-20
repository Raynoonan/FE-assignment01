
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type InputProps = {
    handleUserInput: (e:React.ChangeEvent<HTMLInputElement>)=> void
    changeColor : any

}
export default function Input({handleUserInput, changeColor}:InputProps) {
   const[colorModalOpen, setColorModalOpen] = useState(false)
   const handleClose = () => setColorModalOpen(false)
    return (
        <div>
            <button id="button2"
            onClick={() => setColorModalOpen(true)}>customize</button>


            <Modal show={colorModalOpen} onHide={handleClose}  style={{backgroundColor: 'gray', maxHeight: 150, borderRadius: 10 }} >
        <Modal.Header>
          <Modal.Title>Choose a background color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <button style={{backgroundColor: 'CornFlowerBlue'}} onClick={() => changeColor('CornFlowerBlue')}>blue</button>
            <button style={{backgroundColor: 'pink'}} onClick={() => changeColor('pink')}>pink</button>
            <button style={{backgroundColor: 'Chartreuse'}} onClick={() => changeColor('Chartreuse')}>green</button>
        </Modal.Body>
        <Modal.Footer>
          <Button id='button2' style={{fontSize: 10}} onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
            <form>
                <label htmlFor="tasks"> Enter tasks:</label>
                <input type="text" id="tasks" name="tasks" onChange={handleUserInput} />
                
                
            </form>
        </div>
    )
}