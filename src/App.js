import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        {/* Add the rest of your components and routes here */}
      </div>
    </Router>
  );
}

export default App;
