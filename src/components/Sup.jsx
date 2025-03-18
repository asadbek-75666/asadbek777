import React from 'react'
import rasm1 from '../image/superman.png'
import '../style/sup.css'
function Sup() {
  return (
    <section className='sup'>
      <div className="container">
      <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <h6>Lorem Ipsum</h6>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>  
      <img src={rasm1} alt="" />
      </div>
    </section>
  )
}

export default Sup
