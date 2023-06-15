import Home from "./home";
import Libary from "../pages/Libary";
import Subscriptions from "../pages/Subscriptions";
import WatchLater from "../pages/WatchLater";

function sideBar() {
  return (
    <>
      <div className="side-container">
        <link to="/Home"></link>
        <link to="/Libary"></link>
        <link to="/Subscriptions"></link>
        <link to="/WatchLater"></link>
      </div>
      ;
    </>
  );
}
