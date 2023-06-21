import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div
      className="text-sm gap-4 p-2 flex flex-col w-1/12 side-container border border-gray-300"
      style={{ borderRadius: "2px" }}
    >
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/subscriptions">Subscriptions</Link>
      <Link to="/library">Library</Link>
    </div>
  );
}

export default SideBar;
