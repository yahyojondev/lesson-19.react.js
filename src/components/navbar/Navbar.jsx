import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <NavLink to={"/"} className="title__logo">
            Users
          </NavLink>
          <div className="input__search">
            <input type="text" />
            <IoSearchSharp />
          </div>
          <div className="links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>Register</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
          </div>
          <div className="wishlist__cart__wrapper">
            <div className="wishlist__wrapper">
              <p>wishlist</p>
              <FaRegHeart />
            </div>
            <div className="cart__wrapper">
              <p>cart</p>
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
