import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./componnent/Cart";
import Navbar from "./componnent/Navbar";
import Product from "./componnent/Product";
import Products from "./componnent/Products";
import "./styles.css";
import Checkout from "./componnent/Checkout";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Products} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="/products/:id" Component={Product} />
      </Routes>
    </>
  );
}
