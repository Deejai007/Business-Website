import React from "react";
import { useState, useEffect } from "react";
import "./Item.css";
import axios from "axios";
function Item(props) {
  let id = props.id;
  // console.log(id);
  const [product, setProduct] = useState(null);
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, []);
  // console.log(product);
  if (product)
    return (
      <div>
        <div className="item-item">
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="info">
            <div className="info-info item-category">
              Category(s):{product.category}
            </div>
            <div className="info-info item-title">{product.title}</div>
            <div className="info-info item-price">${product.price}</div>
            <div className="info-info item-rating">
              <span
                style={{ width: "100%", overflow: "hidden" }}
                className="rating-width"
              >
                ⭐⭐⭐⭐⭐
              </span>
              ({product.rating.count})
            </div>
            <div className="info-info action">
              <button className="action-btn addtocart-btn">Add to cart</button>
              <button className="action-btn description-btn">
                Description
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Item;
