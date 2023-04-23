import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  localStorage.setItem("cart", JSON.stringify(state));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar bg-body-tertiary py-3 shadow-sm ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-10" to="/">
            LA COLLECTION
          </NavLink>
          <NavLink
            to="/cart"
            className="btn btn-outline-primary  ms-2 position-relative"
          >
            <i className="fa fa-shopping-cart me-1"> </i>
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {state?.length}
              <span className="visually-hidden"></span>
            </span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ml-5 ">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
