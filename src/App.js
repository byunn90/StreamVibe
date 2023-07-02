import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Libary from "./pages/Libary";
import Subscriptions from "./pages/Subscriptions";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Libary" element={<Libary />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
