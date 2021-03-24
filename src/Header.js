import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./close.svg";
import { ReactComponent as MenuIcon } from "./menu.svg"

import "./Header.css";

const Header  = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    return (
      <div className="Header">
        <nav className="my-navbar">
       <a className="my-nav-logo" href="#!">Navbar</a>
             <button className="my-nav-icon" onClick={handleClick}>
          {click ? (
            <CloseMenu className="my-menu-icon" />
          ) : (
            <MenuIcon className="my-menu-icon" />
          )}
        </button>
    <div className={click ? "my-nav active" : "my-nav"}>
      <ul className="my-nav-list">
      <li className="my-nav-item">
                <a className="my-nav-link" href="#!">Link</a>
            </li>
            <li className="my-nav-item">
                <a className="my-nav-link" href="#!">Link</a>
            </li>
            <li className="my-nav-item active">
                <a className="my-nav-link" href="#!">Link </a>
            </li>
            <li className="my-nav-item">
                <a className="my-nav-link" href="#!">Link</a>
            </li>
      </ul>
    </div>
        </nav>
      </div>
    );
  };
  
  export default Header;
  