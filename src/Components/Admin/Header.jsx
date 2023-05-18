import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="contain">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/admin"}> Dashboard</Link>
          </li>
          <li>
            <Link to={"admin/addproduct"}> AddProducts</Link>
          </li>
          <li>
            <Link to={"admin/productstable"}> Productstable</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
