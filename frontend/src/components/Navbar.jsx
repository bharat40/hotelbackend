import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex px-4 gap-3">
        <Link to="/user">
          <li className="px-2 py-1 bg-gray-200 hover:bg-gray-300">
            User Details
          </li>
        </Link>
        <Link to="/menu">
          <li className="px-2 py-1 bg-gray-200 hover:bg-gray-300">
            Menu Items
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
