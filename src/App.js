import Login from "./components/Login/Login";
import React, { useState } from "react";
import Wishlist from "./components/Wishlist/Wishlist";
import Home from "./components/Home/Home";
import { useNavigate, useLocation } from "react-router-dom";
import LeftNav from "./components/Navbar/LeftNav";
import Product from "./components/Products/Product";
import About from "./components/Aboutus/About";
import Clients from "./components/Clients/Clients";
import Description from "./components/Login/Description";
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
  const [setNav, setSetNav] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  // document.getElementById("leftnavbar").classList.remove("hide");
  const handleUpdateCart = (id) => {
    let present = wishlist.includes(id);
    if (!present) {
      setWishlist((wishlist) => [...wishlist, id]);
      toast("Item added tocart");
    } else {
      // console.log("Already present");
      toast("Already present in cart");
    }

    // console.log(wishlist);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <TopNav /> */}
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
          <Route
            path="home"
            element={<Home />}
            handleUpdateCart={handleUpdateCart}
          />
          <Route path="home/wishlist" element={<Wishlist list={wishlist} />} />
          <Route path="home/about" element={<About />} />
          <Route path="home/clients" element={<Clients />} />
          <Route
            path="home/products/electronics"
            element={
              <Product
                category="electronics"
                handleUpdateCart={handleUpdateCart}
              />
            }
          />
          <Route
            path="home/products/mensclothing"
            element={
              <Product
                category="men's clothing"
                handleUpdateCart={handleUpdateCart}
              />
            }
          />
          <Route
            path="home/products/jewelery"
            element={
              <Product
                category="jewelery"
                handleUpdateCart={handleUpdateCart}
              />
            }
          />
          <Route
            path="home/products/womensclothing"
            element={
              <Product
                category={category}
                handleUpdateCart={handleUpdateCart}
              />
            }
          />
          <Route
            path="home/products/product"
            element={<Description />}
            handleUpdateCart={handleUpdateCart}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
