import React from "react";
import { useState } from "react";
import "./Wishlist.css";
import CartItem from "./CartItem";
function Wishlist(props, { handleUpdateCart }) {
  let wishlist = props.list;
  console.log(wishlist);
  const [total_price, setTotal_price] = useState(0);
  let total_pric = 0;
  let tax_ship = 10;
  const updatePrice = (num) => {
    // setTimeout(() => {
    // }, 100);
    total_pric += num;
    setTotal_price(total_pric);
  };

  if (wishlist.length)
    return (
      <div className="WishlistComp ScrollComp">
        <div className="items-div">
          <h1>Wishlist</h1>
          <div className="listt">
            {wishlist.map((id) => (
              <CartItem
                id={id}
                key={id}
                handleUpdateCart={props.handleUpdateCart}
                updatePrice={updatePrice}
              ></CartItem>
            ))}
          </div>
        </div>

        <div className="summary col-md-4">
          <dl className="subtotal">
            <dt>Subtotal</dt>
            <dd>${total_price} </dd>
            <dt>
              <p>Shipping & Taxes </p>
            </dt>
            <dd>${tax_ship}</dd>
          </dl>
          <dl className="total">
            <dt>Total</dt>
            <dd>${tax_ship + total_price}</dd>
          </dl>
          <dl className="support">
            <dt>
              <p className="promocode">Have a promocode?</p>
            </dt>
          </dl>
          <div className="payment">
            <a href="payment/add">Add</a>
            <h4 className="headline-primary">Payment</h4>
            <div className="ux-card">
              <a href="/payment/{id}">
                <img
                  src="https://img1.wsimg.com/fos/react/sprite.svg#visa"
                  height="32"
                  width="50"
                />{" "}
                John Doe
              </a>
            </div>
            <div className="ux-card">
              <a href="/payment/{id}">
                <img
                  src="https://img1.wsimg.com/fos/react/sprite.svg#visa"
                  height="32"
                  width="50"
                />{" "}
                John Doe
              </a>
            </div>
          </div>
          <div className="complete">
            <button
              type="button"
              // disabled="disabled"
              className="btn btn-purchase"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="WishlistComp ScrollComp">
        <div className="items-div">
          <h1>Wishlist</h1>
          <div className="empty-image">
            <img
              src="https://www.seekpng.com/png/full/117-1170538_404-your-cart-is-empty.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default Wishlist;
