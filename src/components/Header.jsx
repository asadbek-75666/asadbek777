import React, { useRef } from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  let modal = useRef();
  function headstyle() {
    modal.current.classList.add("show");
  }
  function removeShow() {
    console.log(55);
    
    modal.current.classList.remove("show");
  }
  return (
    <header>
      <div ref={modal} className="modal">
        <div className="container">
          <div className="header__wrapper">
            <h5>LOGO</h5>
            <div className="ok"  onClick={removeShow}>
            <img
             
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLWutZlRsfRhjBREEJowIPDSFpQZscJs13w&s"
              alt=""
            />
            </div>
            <ul>
              <li onClick={removeShow}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={removeShow}>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li onClick={removeShow}>
                <NavLink to="/services">Portfolio</NavLink>
              </li>
              <li onClick={removeShow}>
                <NavLink to="/news">News</NavLink>
              </li>
              <button onClick={removeShow}>
                <NavLink to="/contact">Contact us</NavLink>
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <h5>LOGO</h5>
            <span onClick={headstyle} className="MENU">
              MENU
            </span>
            <ul>
              <li >
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <button>
                <NavLink to="/contact">Contact us</NavLink>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
