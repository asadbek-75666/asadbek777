import React from 'react'
import '../style/cege.css'
import rasm1 from '../image/user.png'
import rasm2 from '../image/location.png'
import rasm3 from '../image/Server.png'
function Cege() {
  return (
    <section className='cege'>
      <div className="container">
        <div className="cege__content">
<h6>Home<span>Services</span></h6>
<h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>        
</div>
<div className="cege__wrapper">
    <div className='cege__wrapper2'>
<div className="cege__card1">
<img src={rasm1} alt="" />
<h5> 90+<span>Clients</span></h5>
</div>

<div className="cege__card2">    
<img src={rasm2} alt="" />
<h5> 30+<span>Countries</span></h5>
</div>  
<div className="cege__card3">    
    <img src={rasm3} alt="" />
    <h5> 50+<span>Projects</span></h5>
    </div>
</div>
</div>
      </div>
    </section>
  )
}

export default Cege
