import React from 'react'
import '../style/lider.css'
import rasm1 from '../image/Hero Video.png'
import rasm2 from '../image/Group 1120.png'
function Lider() {
  return (
    <section className='lider'>
      <div className="container">
        <div className="lider__wrapper">
        <img src={rasm1} alt="" />
<div className='lider__content'>
<h4>Lorem Ipsum is simply dummy text.</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
<div className='lider__img'>
  <img src={rasm2} alt="" />
  <h6>Lorem Ipsum is simply</h6>
</div>
<div className='lider__img'>
  <img src={rasm2} alt="" />
  <h6>Lorem Ipsum is simply</h6>
</div>
<div className='lider__img'>
  <img src={rasm2} alt="" />
  <h6>Lorem Ipsum is simply</h6>
</div>
<div className='lider__img'>
  <img src={rasm2} alt="" />
  <h6>Lorem Ipsum is simply</h6>
</div>
</div>
</div>
      </div>
    </section>
  )
}

export default Lider
