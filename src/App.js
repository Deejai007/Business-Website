import Login from "./components/Login";
import MainPage from "./components/MainPage";
import React, { useState } from "react";
import Wishlist from "./components/Wishlist";
import Home from "./components/Home";
import { useNavigate, useLocation } from "react-router-dom";
import LeftNav from "./components/LeftNav";
import Product from "./components/Product";
import About from "./components/About";
import Clients from "./components/Clients";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [category, setCategory] = React.useState("women's clothing");
  // const { state } = useLocation();
  // const namee = state.username;
  // setTimeout(() => {
  //   notify();
  // }, 700);
  // const notify = () => {
  //   toast(`👋 Hello ${namee}!`);
  // };
  return (
    <BrowserRouter>
      <div className="App">
        <LeftNav />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          // pauseOnHover
          theme="light"
        />

        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="home" element={<MainPage />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="home/wishlist" element={<Wishlist />} />
          <Route path="home/about" element={<About />} />
          <Route path="home/clients" element={<Clients />} />

          <Route
            path="home/products/electronics"
            element={<Product category="electronics" />}
          />
          <Route
            path="home/products/mensclothing"
            element={<Product category="men's clothing" />}
          />
          <Route
            path="home/products/jewelery"
            element={<Product category="jewelery" />}
          />
          <Route
            path="home/products/womensclothing"
            element={<Product category={category} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
