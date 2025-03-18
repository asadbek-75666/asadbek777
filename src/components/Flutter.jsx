import React from 'react'
import '../style/flutter.css'
import rasm from  '../image/gr (1).png'
import rasm1 from  '../image/gr (2).png'
import rasm2 from  '../image/gr (3).png'
import rasm3 from  '../image/gr (4).png'
import rasm4 from  '../image/gr (5).png'
import rasm5 from  '../image/gr (6).png'
function Flutter() {
  return (
    <section className='flutter'>
      <div className="container">
<h5>Our Recent Projects</h5>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<div className="flutter__wrapper">
    <div className='flutter__image'>
<img src={rasm5} alt="" />
<img src={rasm4} alt="" />
<img src={rasm3} alt="" />
</div>
<div className='flutter__image'>
<img src={rasm2} alt="" />
<img src={rasm1} alt="" />
<img src={rasm} alt="" />
</div>
<button className='flutter__ww'>SEE ALL</button>
</div>
      </div>
    </section>
  )
}

export default Flutter
