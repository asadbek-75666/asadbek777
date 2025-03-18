import React from 'react'
import rasm1 from '../image/mus__img.png'
import rasm2 from '../image/mus__img2.png'
import rasm3 from '../image/mus__img3.png'
import rasm4 from '../image/mus__img4.png'
import left from '../image/left.png'
import right from '../image/right.png'
import '../style/mus.css'
import MusCard from './MusCard'
function Mus() {
  return (
    <section className='mus'>
        <h3>Trusted by Thousands of Happy Customer</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
<div className="mus__wrapper">
    <MusCard photo={rasm1} name="Viezh Robert" title="Warsaw, Poland" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
    <MusCard photo={rasm2} name="Yessica Christy" title="Shanxi, China" text="Lorem Ipsum is simply dummy text of the printing and "/>
    <MusCard photo={rasm3} name="Kim Young Jou" title="Seoul, South Korea" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
</div>
<div className="container">
<div className='mus__img'>
        <img className='chiziq' src={rasm4} alt="" />
    <img className='chap' src={left} alt="" />
    <img className='ong' src={right} alt="" />
</div>
</div>
    </section>
  )
}

export default Mus
