import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "./logo.svg";

function Nav() {
  return (
    <div className="header">
      
        <Link className="amazon" to="/Home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="nav-links">
          <Link className="link" to="/Home">
            <li>
              <HomeIcon className="icon" fontSize="medium" />
            </li>
          </Link>
          <Link className="link" to="/Shop">
            <li>
              <ShopIcon className="icon" fontSize="medium" />
            </li>
          </Link>
          <Link className="link" to="/Cart">
            <li>
              <ShoppingBasketIcon className="icon" fontSize="medium" />
              
            </li>
          </Link>
        </ul>
      
    </div>
  );
}
export default Nav;
