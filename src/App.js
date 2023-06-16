import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Library from "./pages/Library";
import Subscriptions from "./pages/Subscriptions";
import WatchLater from "./pages/WatchLater";
import Shorts from "./pages/Shorts";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <SideBar />
        <Switch>
          <Route path="/Library" component={Library} />
          <Route path="/Subscriptions" component={Subscriptions} />
          <Route path="/WatchLater" component={WatchLater} />
          <Route path="/Shorts" component={Shorts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
