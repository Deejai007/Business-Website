import React from "react";
import "./Description.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Description(props) {
  const navigate = useNavigate;
  //   let id = props.id;
  // console.log(id);
  const { state } = useLocation();
  const id = state.ItemId;

  const [product, setProduct] = useState(null);
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
      // console.log(response.data);
    });
  }, []);

  // console.log(product);
  if (product)
    return (
      <div className="window ScrollComp">
        <div className="item-item">
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="info">
            {/* <div className="info-info item-category"> */}
            {/* Category-{product.category} */}
            {/* </div> */}
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
              <button
              // onClick={() => {
              //   navigate("/home/products/product", { state: { itemId: id } });
              //   console.log(id);
              // }}
              // className="action-btn2"
              >
                Buy now!
              </button>
              <button>Add to cart</button>
            </div>
            <div className="disc">{product.description}</div>
          </div>
        </div>
      </div>
    );
}

export default Description;
