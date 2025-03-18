import React from "react";
import "../style/frank.css";
import rasm1 from "../image/oyinchiilar (1).png";
import rasm2 from "../image/oyinchiilar (2).png";
import rasm3 from "../image/oyinchiilar (3).png";
import rasm4 from "../image/oyinchiilar (4).png";
import rasm5 from '../image/fire 1.png'
function Frank() {
  return (
    <div className="container">
      <div className="Frank">
        <div className="frank__card">
          <h4>Currently Trending Games</h4>
          <button>SEE ALL</button>
        </div>
      <div className="frank__wrapper">
        <div className="frank__image">
          <img src={rasm1} alt="" />
          <div className="_f">  
            <img src={rasm5} alt="" />     
            <h6>40 Followers</h6>
            </div>
        </div>
        <div className="frank__image">
          <img src={rasm2} alt="" />
          <div className="_f">  
            <img src={rasm5} alt="" />     
            <h6>40 Followers</h6>
            </div>
        </div>
        <div className="frank__image">
          <img src={rasm3} alt="" />
          <div className="_f">  
            <img src={rasm5} alt="" />     
            <h6>40 Followers</h6>
            </div>
        </div>
        <div className="frank__image">
          <img src={rasm4} alt="" />
          <div className="_f">  
            <img src={rasm5} alt="" />     
            <h6>40 Followers</h6>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Frank;
