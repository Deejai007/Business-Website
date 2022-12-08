import React from "react";
import "./Wishlist.css";
import CartItem from "./CartItem";
function Wishlist(props) {
  let wishlist = props.list;
  console.log(wishlist);
  return (
    <div className="WishlistComp ScrollComp">
      <div className="items-div">
        <h1>Wishlist</h1>
        <div className="listt">
          {wishlist.map((id) => (
            <CartItem id={id} key={id}></CartItem>
          ))}
        </div>
      </div>
      <div className="summary col-md-4">
        <dl className="subtotal">
          <dt>Subtotal</dt>
          <dd>$14.99</dd>
          <dt>
            <p>Shipping & Taxes </p>
          </dt>
          <dd>$3.42</dd>
        </dl>
        <dl className="total">
          <dt>Total</dt>
          <dd>$18.41</dd>
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
}

export default Wishlist;
