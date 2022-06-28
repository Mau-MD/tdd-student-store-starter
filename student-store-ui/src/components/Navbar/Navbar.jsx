import * as React from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/purchases">
            Order History
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
