import React from 'react'

const Modal = ({closemodal}) => {
    const btn=(()=>{
        closemodal(false)
    })
  return (
    <div className='ModalBackground'>
        <div className='ModalContainer'>
            <button onClick={btn}>X</button>
            <div className='title'>
                <h1>Are you sure you want to continue</h1>
            </div>
            <div className='body'>
                <p>The next page is awesome.You should move forward.</p>
            </div>
            <div className='footer'>
                <button onClick={btn}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
        </div>
  )
}

export default Modal