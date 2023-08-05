import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppDetails } from "./App";
import { HiShoppingCart } from "react-icons/hi";

function Nav() {
  const { login, setLogin, cart } = useContext(AppDetails);
  const navigate = useNavigate()

  function userLogin() {
    setLogin(true)
    localStorage.setItem("login", "true");
    navigate("/Login")
  }

  function logout() {
    setLogin(false)
    localStorage.removeItem("login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid d-flex justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h5>𝕮𝖆𝖗𝖘 ♛</h5>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav column-gap-5 fw-bold">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Cocktail" className="nav-link">
                  Cocktail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Courses" className="nav-link">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Support" className="nav-link">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-sm me-3 position-relative"
          >
            <HiShoppingCart />
            <span
              className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center"
              style={{ height: "18px", width: "18px", fontSize: "12px" }}
            >
              {cart.length}
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>
          {login ? (
            <button className="btn btn-sm btn-danger" onClick={() => logout()} >Logout</button>
          ) : (
            <button className="btn btn-sm btn-success" onClick={() => userLogin()}>Login</button>

          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
