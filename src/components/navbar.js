import { useState } from "react";
import myLogo from "../images/production.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <>
      <nav>
        <div className="flex items-center">
          <div>
            <a className="type-scope-2" href="http://localhost:3000/">
              <img
                className="logo-scope w-10 flex-shrink-0"
                src={myLogo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex justify-center flex-grow">
            <form
              className="typeo-search m-1 flex items-center"
              action="/search"
              method="get"
            >
              <input
                type="text"
                id="header-search"
                placeholder="Search.."
                name="s"
                className="outline-none h-5 border px-2 rounded-l-lg rounded-r-none bg-white-200 text-gray-800"
              />
              <button
                dir="rtl"
                className="bg-gray-200 text-gray-800 h-5 border-4 rounded-l-none rounded-r-lg flex items-center justify-center focus:outline-none focus:ring border-2 shadow"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showPopup && (
        <div className="popup flex justify-center">
          <span
            className="italic bg-gray-200 text-xs px-2 py-1 max-w-xs rounded-lg border-1 popup-text"
            style={{ fontSize: "10px", marginLeft: "250px" }}
          >
            Search
          </span>
        </div>
      )}
    </>
  );
}

export default Navbar;
