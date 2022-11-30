import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";
import axios from "axios";
function Product(props) {
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
    // if(props.ca)
    // if (props.category !== cate) setCate(props.category);s
    getItems();
  }, [cate]);
  if (data)
    return (
      <div>
        {data.map((item) => (
          <Item id={item.id} key={item.id} />
        ))}
      </div>
    );
}
export default Product;
