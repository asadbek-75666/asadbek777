import React from 'react'
import '../style/product.css'
import rasm1 from '../image/Rectangle 25.png'
import rasm2 from '../image/header__.png'
import rasm3 from '../image/robot.png'
function Product({photo}) {
  return (
    <section className='product'>
      <div className="container">
        <div className="product__wrapper">
        <img src={rasm2} alt="" />
        <div>
        <h2>Lorem Ipsum is simply dummy 
        text dummy text </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
        <button>Read more</button>
        </div>
        </div>
        <div className="product__wrapper">
        <img src={rasm1} alt="" />
        <div>
        <h2>Lorem Ipsum is simply dummy 
        text dummy text </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
        <button>Read more</button>
        </div>
        </div>
        <div className="product__wrapper">
        <img src={rasm3} alt="" />
        <div>
        <h2>Lorem Ipsum is simply dummy 
        text dummy text </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
        <button>Read more</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Product
