import React from 'react'
import '../style/brand.css'
import rasm from '../image/global.png'
import rasm2 from '../image/contact img (1).png'
import rasm3 from '../image/contact img (2).png'
import rasm4 from '../image/contact img (3).png'
function Brand() {
  return (
<section className='brand'>
      <div className="container">
      <div className="cege__content">
<h6>Home<span>Contact</span></h6>
<h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>        
</div>
<div className='brand__img'>
<img className='ff' src={rasm} alt="" />
</div>
{/* <div className="brand__content">
    <div>
    <h6>Follow us</h6>
<img src={rasm2} alt="" />
</div>
<hr />
<div className='brand__card'>
    <img src={rasm4} alt="" />
    <h4>+94 4444 5555 6</h4>
</div>
<hr />
<div className="brand__card">
    <img src={rasm3} alt="" />
    <p>but also the leap into electronic 
    typesetting</p>
</div>
</div> */}
      </div>
    </section>
  )
}

export default Brand
