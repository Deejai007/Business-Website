import React from "react";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
function Product(props, { handleUpdateCart }) {
  // let cat = props.category;
  // console.log(cat);

  const [cate, setCate] = useState(null);
  const [data, setData] = useState(null);
  if (props.category != cate) setCate(props.category);
  const getItems = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/category/${cate}`)
      .catch((err) => {
        console.log(err);
      });
    if (res) {
      setData(res.data);
    }
  };
  useEffect(() => {
    getItems();
  }, [cate]);
  if (!data)
    return (
      <div className="ProductComp ScrollComp">
        <h1>Products in {props.category} category</h1>
        <div className="productss-div">
          <div className="dj-Loading"></div>
        </div>
      </div>
    );
  return (
    <div className="ProductComp ScrollComp">
      <h1>Products in {props.category} category</h1>
      <div className="productss-div">
        {/* <div className="dj-Loading"></div> */}
        {data.map((item) => (
          <div className="prod-prod" key={item.id}>
            <Item id={item.id} handleUpdateCart={props.handleUpdateCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
