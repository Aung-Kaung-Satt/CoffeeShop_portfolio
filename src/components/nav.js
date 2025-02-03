import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-16 shadow-md ">
      <div className="flex items-center ml-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <g
            fill="none"
            stroke="#f5a97f"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14.5 7c-.5 2.5-2 5.5-3 6.5s-2 1-3 1s-2 0-3.02-1C4.45 12.5 3 9.5 2.5 7c3 2 9 2 12 0m-12-2c3 2 9 2 12 0" />
            <path d="M2.5 8.4c-1.73 1.6-1.26 4.17 2 4.1M7 2c-.75-.36-1.5.18-1.5.74c-.01.56.94.78 1.5.75c.6-.03.97-.7 1.5-.96C8.98 2.3 9.41 2 10 2c.56 0 1.52.25 1.5 1c-.01.61-1.12.8-1.5.49" />
          </g>
        </svg>
        <h1 className="px-2">
          Coffee<span>Shop</span>
        </h1>
      </div>
      <ul className="flex mr-20">
        <li className="px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/menu" className="">
            Menu
          </Link>
        </li>
        <li className="px-5">
          <Link to="/contact" className="">
            Contact
          </Link>
        </li>
        <li className="px-5">
          <Link to="/faq" className="">
            FAQ
          </Link>
        </li>
        <li className="px-5">
          <Link to="/about" className="">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
