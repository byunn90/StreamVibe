import { useState } from "react";
import myLogo from "../images/production.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // Create state for searching youtube API
  const [searchBooks, setSearchBooks] = useState([]);
  // Api handling part
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <nav>
        <div className="flex items-center">
          <div>
            <a className="type-scope-2 gap-2" href="www.google.com">
              <img
                className="logo-scope w-12 flex-shrink-0"
                src={myLogo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex justify-center flex-grow">
            <form
              className="typeo-search m-1 flex items-center gap-2"
              action="/search"
              method="get"
            >
              <input
                type="text"
                id="header-search"
                placeholder="Search.."
                name="s"
                className="outline-none rounded-md border-2 border-blue-600"
              />
              <button className="flex items-center justify-center focus:outline-none focus:ring rounded-md border-2 rounded-full wd-10 shadow hover:bg-gray-400 hover:text-white">
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
