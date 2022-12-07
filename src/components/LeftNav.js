import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import "./LeftNav.css";
function LeftNav() {
  function menuToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  const navigate = useNavigate();

  return (
    <div className="LeftNavComp hide" id="leftnavbar">
      <nav className="vertical-menu-wrapper">
        {/* <div className="vertical-menu-logo">
          <div>
            <img src="" alt="" />
          </div>
        </div> */}
        <ul className="vertical-menu">
          <li className="navli">
            <Link className="Linkk" to="/home">
              <i className="fa fa-light fa-house-user"> </i> Home
            </Link>
          </li>
          <ul className="navli2">
            <li className="dropdown-btn" onClick={menuToggle}>
              <i className="fa fa-light fa-store"></i> Products
              <i className="fa fa-caret-down"></i>
            </li>
            <ul id="myDropdown" className="dropdown-content show">
              <li>
                {/* <button
                  onClick={() => {
                    navigate("/home/products/electronics");
                  }}
                >
                </button> */}
                <Link className="product-menu" to="/home/products/electronics">
                  &#8226; Electronics
                </Link>
              </li>
              <li>
                {/* <button
                  onClick={() => {
                    navigate("/home/products/jewelery");
                  }}
                >
                </button> */}
                <Link to="/home/products/jewelery" className="product-menu">
                  &#8226; Jewelery
                </Link>
              </li>
              <li>
                {/* <button
                  onClick={() => {
                    navigate("/home/products/mensclothing");
                  }}
                >
                </button> */}
                <Link to="/home/products/mensclothing" className="product-menu">
                  &#8226; Men's clothing
                </Link>
              </li>
              <li>
                {/* <button
                  onClick={() => {
                    navigate("/home/products/womensclothing");
                  }}
                >
                </button> */}

                <Link
                  to="/home/products/womensclothing"
                  className="product-menu"
                >
                  &#8226; Women's clothing
                </Link>
              </li>
            </ul>
          </ul>
          <li className="navli">
            <Link className="Linkk" to="/home/wishlist">
              <i className="fa  fa-cart-shopping"></i> Wishlist
            </Link>
          </li>
          <li className="navli">
            <Link className="Linkk" to="/home/clients">
              <i className="fa fa-duotone fa-users"></i> Clients
            </Link>
          </li>
          <li className="navli">
            <Link className="Linkk" to="/home/about">
              <i className="fa fa-light fa-user"></i> About Us
            </Link>
          </li>
        </ul>
        <div className="lowpart">
          <div className="logoutdj">
            <button className="logout-btn">
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
          <div className="contact">
            <div className="iconn">
              <a href="https://www.instagram.com" target="_blank">
                <i className="icon fa fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="iconn">
              <a href="https://www.twitter.com" target="_blank">
                <i className=" icon fa fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="iconn">
              <a href="https://www.facebook.com" target="_blank">
                <i className="icon fa fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftNav;
