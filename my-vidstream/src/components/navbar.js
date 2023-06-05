import { useState } from "react";
import myLogo from "../images/production.png";

function Navbar() {
  // Create state for searching youtube API
  const [searchBooks, setSearchBooks] = useState([]);
  // Api handling part
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="navbar-container flex flex-row">
        <div className="flex items-center space-x">
          <a href="www.google.com">
            <img className="logo-scope w-12" src={myLogo} alt="Logo" />
          </a>
          <nav>
            <form
              className="flex items-center gap-4"
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
              <button
                className="rounded-md border-2 border-blue-500 rounded-full wd-12 shadow hover:shadow-lg
               "
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
        <div />
      </div>
    </>
  );
}

export default Navbar;
