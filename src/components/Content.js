import React from "react";
import "./Content.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./Wishlist";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Clients from "./Clients";
import { useState } from "react";
function Content() {
  const [category, setCategory] = React.useState("women's clothing");

  return (
    <div className="main-body">
      {/* <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route
          path="/products/electronics"
          element={<Product category="electronics" />}
        />
        <Route
          path="/products/men's clothing"
          element={<Product category="men's clothing" />}
        />
        <Route
          path="/products/jewelery"
          element={<Product category="jewelery" />}
        />
        <Route
          path="/products/women's clothing"
          element={<Product category={category} />}
        />
      </Routes> */}
    </div>
  );
}

export default Content;
