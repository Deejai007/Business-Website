import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";
import axios from "axios";
function CartItem(props) {
  let id = props.id;
  // console.log(id);
  let navigate = useNavigate();
  const [product, setProduct] = useState(null);
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
      // console.log(response.data);
    });
  }, []);

  if (product)
    return (
      <div className="cart-item">
        <div className="image-dj">
          <img src={product.image} alt="" />
        </div>
        <div className="cart-info">
          <div className="info-info cart-item-category">
            Category(s):{product.category}
          </div>
          <div className="info-info item-title">{product.title}</div>
          <div className="info-info item-price">${product.price}</div>
        </div>
      </div>
    );
}

export default CartItem;
