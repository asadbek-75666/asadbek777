import React from 'react'
import '../style/veer.css'
import rasm1 from '../image/odam (4).png'
import rasm2 from '../image/odam (3).png'
import rasm3 from '../image/odam (2).png'
import rasm4 from '../image/odam (1).png'
function Veer() {
  return (
    <section className='veer'>
      <div className="container">
        <h5>Our Team</h5>
        <div className="veer__wrapper">
            <div className="veer__card">
                <img src={rasm1} alt="" />
                <h6>John Peter</h6>
            </div>
            <div className="veer__card">
                <img src={rasm2} alt="" />
                <h6>John Peter</h6>
            </div>
            <div className="veer__card">
                <img src={rasm3} alt="" />
                <h6>John Peter</h6>
            </div>
            <div className="veer__card">
                <img src={rasm4} alt="" />
                <h6>John Peter</h6>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Veer
