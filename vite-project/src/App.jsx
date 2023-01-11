import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [opemModal,setOpenModal]=useState(false)
    const click=(()=>{
        setOpenModal(!opemModal)
    })
  return (
    <div className="App">
      <h1>Hey,Click on the button to open the modal</h1>
      <button className='openModalButton' onClick={click}>open</button>
      {opemModal && <Modal closemodal={setOpenModal}/>}
    </div>
  )
}

export default App
