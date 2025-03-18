import React, { useRef } from 'react'
function NiceContent({photo,text}) {
    let x = useRef()
function xs()
{
    x.current.classList.toggle("bg")
}
  return (
    <div className='nice__content'>
        <img src={photo} alt="" />
        <div className='nice__content__card'>
      <h6>John smash</h6>
      <span ref={x} onClick={xs}>.5min</span>
      </div>
<h2>Lorem Ipsum is simply dummy text dummy text </h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
<h5>{text}</h5>
    </div>
  )
}

export default NiceContent
