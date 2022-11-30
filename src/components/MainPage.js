import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LeftNav from "./LeftNav";
import Content from "./Content";

import TopNav from "./TopNav";
import "./MainPage.css";
function MainPage() {
  // const { state } = useLocation();
  // const namee = state.username;
  // setTimeout(() => {
  //   notify();
  // }, 700);
  // const notify = () => {
  //   toast(`👋 Hello ${namee}!`);
  // };
  let categ = "";
  return (
    <div>
      {/* <LeftNav /> */}
      {/* <TopNav /> */}
      {/* <Content category={categ} /> */}
      {/* <ToastContainer */}
      {/* // // position="top-right"
        // autoClose={4000}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // // pauseOnHover
        // theme="light"
      /> */}
      gff
    </div>
  );
}
export default MainPage;
