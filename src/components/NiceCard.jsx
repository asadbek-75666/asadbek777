import React, { useRef } from 'react'
import '../style/niceCard.css'
function NiceCard({photo}) {
    let x = useRef()
    function xs()
    {
        x.current.classList.toggle("bg")
    }
  return (
    <div className='nice__card'>
      <img src={photo} alt="" />
      <div>
      <div className='nn'>
        <h6 ref={x}>John smash</h6>
        <span ref={x} onClick={xs}>.5min</span>
      </div>
      <p>Lorem Ipsum is simply dummy text dummy text ? </p>
      </div>
    </div>
  )
}

export default NiceCard
