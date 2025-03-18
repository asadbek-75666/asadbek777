import React from 'react'
import '../style/footer.css'
import rasm1 from '../image/facebook.png'
function Footer() {
  return (
    <section>
      <div className="container">
        <div className="footer__content">
          <div>
<h3>Lorem Ipsum</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<div className='footer__card'>
  <div>
    <h4>Stay in the loop</h4>
    <h5>Subscribe to receive the latest news and updates about TDA.
    We promise not to spam you! </h5>
    </div>
    <form className='form'>
    <input className='input' type="text" placeholder='Enter email address'/>
    <button className='btn'>Continue</button>
    </form>
</div>
</div>
</div>
 <div className="footer__wrapper">
  <div className="footer__rect">
  <h4>LOGO</h4>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  <h6>@Logo</h6>
  </div>
  <ul className='footer__ul'>
  About us
    <li>Zeux</li>
    <li>Portfolio</li>
    <li>Careers</li>
    <li>Contact us</li>
  </ul>
  <div className="footer__tr">
  Contact us
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  <h2>+908 89097 890</h2>
  </div>
  <div className="footer__image">
    <img src={rasm1} alt="" />
  </div>
  <div className='footer__wrapper2'>
  <ul className='footer__ull'>
  About us
    <li>Zeux</li>
    <li>Portfolio</li>
    <li>Careers</li>
    <li>Contact us</li>
  </ul>
  <div className="footer__trr">
  Contact us
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
  <h2>+908 89097 890</h2>
  </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Footer
