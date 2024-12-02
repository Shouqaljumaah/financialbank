import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../api/storge";

function Nav() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navhead">
        <NavLink
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "non" };
          }}
          to={"/home"}
        >
          Home
        </NavLink>

        <div className="navhead">
          <NavLink
            to={"/Transaction"}
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : "non" };
            }}
          >
            Transactions
          </NavLink>

          <NavLink
            to={"/Users"}
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : "non" };
            }}
          >
            Users
          </NavLink>

          <NavLink
            to={"/Profile"}
            style={({ isActive }) => {
              return { textDecoration: isActive ? "underline" : "non" };
            }}
          >
            Profile
          </NavLink>

          <button
            onClick={() => {
              removeToken();
              navigate("/");
            }}
          >
            {" "}
            Logout
          </button>

          <NavLink to="/login"></NavLink>
          <NavLink to="/register"></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
