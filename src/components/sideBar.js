import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBook, FaFolder } from "react-icons/fa";

function SideBar() {
  return (
    <aside>
      <div
        className="linkConainer text-sm gap-4 p-2 flex flex-col w-1/12 side-container border border-gray-300"
        style={{ borderRadius: "2px" }}
      >
        <Link to="/home">
          <FaHome />
        </Link>
        <Link to="/about">
          <FaInfoCircle /> About
        </Link>
        <Link to="/subscriptions">
          <FaBook /> Subscriptions
        </Link>
        <Link to="/library">
          <FaFolder /> Library
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
