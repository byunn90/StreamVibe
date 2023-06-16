import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-container">
      <Link to="/Library">Library</Link>
      <Link to="/Subscriptions">Subscriptions</Link>
      <Link to="/WatchLater">Watch Later</Link>
    </div>
  );
}

export default SideBar;
