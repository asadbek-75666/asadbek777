import React from 'react'
import '../style/hero.css'
import rasm1 from '../image/hero__img (1).png'
import rasm2 from '../image/hero__img (2).png'
import rasm3 from '../image/hero__img (3).png'
import rasm4 from '../image/joy_stick 1.png'
function Hero() {
  return (
    <section className='hero'>
      <div className="container">
<div className="hero__wrapper">
<div className="hero__content">
<h5>3D game Dev </h5>
<h2>Work that we produce for our clients</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
<button>Get more details</button>
    </div>
    <div className="hero__image">
        <img className='olma' src={rasm4} alt="" />
        <img className='shra' src={rasm3} alt="" />
        <img className='unity' src={rasm2} alt="" />
        <img className='unreal' src={rasm1} alt="" />
    </div>
</div>
      </div>
    </section>
  )
}

export default Hero
