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
      <button className='openModalButton' onClick={click}>open</button>
      {opemModal && <Modal/>}
    </div>
  )
}

export default App
