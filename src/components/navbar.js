import { useState } from "react";
import myLogo from "../images/production.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // Create state for searching youtube API
  const [showTooltip, setShowTooltip] = useState(false);
  // Api handling part
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    showTooltip(false);
  };

  return (
    <>
      <nav>
        <div className="flex items-center">
          <div>
            <a className="type-scope-2" href="www.google.com">
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
                className="bg-gray-200 text-gray-800 h-5 border-4 rounded-l-none rounded-r-lg flex items-center justify-center focus:outline-none focus:ring border-2 shadow "
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div />
    </>
  );
}

export default Navbar;
