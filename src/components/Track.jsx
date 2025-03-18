import React from 'react'
import rasm1 from '../image/headerrasm.png'
import '../style/track.css'
function Track() {
  return (
    <section className='track'>
      <div className="container">
        <div className="track__wrapper">
            <img src={rasm1} alt="" />
            <div>
            <h6>Home<span>About us</span></h6>
            <h4>Lorem Ipsum is simply dummy text of the printing and.</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button>Get in touch</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Track
