import React from 'react'
import '../style/brand.css'
import rasm from '../image/global.png'

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
      </div>
    </section>
  )
}

export default Brand
