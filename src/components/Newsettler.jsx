import React from 'react'
import '../style/newsettler.css'
import rasm1 from '../image/newsettler.png'
function Newsettler() {
  return (
    <section className='newsettler'>
      <div className="container">
        <div className='newsettler__content'>
            <div>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
</div>
<div className="newsettler__wrapper">
  <div>
    <img src={rasm1} alt="" />
    <h5>Mobile Game Development</h5>
  </div>
  <div>
    <img src={rasm1} alt="" />
    <h5>PC Game Development</h5>
  </div>
  <div>
    <img src={rasm1} alt="" />
    <h5>PS4 Game Development</h5>
  </div>
  <div>
    <img src={rasm1} alt="" />
    <h5>AR/VR Solutions</h5>
  </div>
</div>
<div className='newsettler__ww'>
<div>
    <img src={rasm1} alt="" />
    <h5>AR/ VR design</h5>
  </div>
  <div>
    <img src={rasm1} alt="" />
    <h5>3D Modelings</h5>
  </div>
  </div>
      </div>
    </section>
  )
}

export default Newsettler
