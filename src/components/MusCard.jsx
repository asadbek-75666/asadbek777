import React, { useRef } from 'react'
import '../style/musCard.css'
function MusCard({photo, text,title,name}) {
    let x = useRef()
    function head()
    {
        x.current.classList.toggle("show")
    }
  return (
    <div ref={x} onClick={head}  className='mus__card'>
<div>
    <img className='hh' src={photo} alt="" />
    <h4>{name}<span>{title}</span></h4>
</div>
<p>{text}</p>
</div>
  )
}

export default MusCard
