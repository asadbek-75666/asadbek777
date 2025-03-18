import React from 'react'
import '../style/deer.css'
function Deer() {
  return (
    <section className='deer'>
      <div className="container">
        <h5>Say hello</h5>
        <h6>Lorem Ipsum is simply dummy text of the printing .</h6>
        <div className='deer__wrapper'>
        <form className='form1'>
       <h3>First Name</h3>
        <input type="text" />
        </form>
        <form className='form1'>
       <h3>Last Name</h3>
        <input type="text" />
        </form>
        </div>
        <form className="form2">
            <div>
            <h3>Email Address</h3>
            <input type="email" />
            </div>
        </form>
        <form className='form3'>
            <div>
            <h3>Message</h3>
            <input type="search" name="" id="" />
            </div>
        </form>
        <div className='deer__btn'>
        <button>Get in touch</button>
        </div>
      </div>
    </section>
  )
}

export default Deer
