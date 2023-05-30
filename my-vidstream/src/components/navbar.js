import myLogo from "../images/production.png";

function Navbar() {
  // Api handling part
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="navbar-container">
        <div className="flex items-center space-x-4">
          <a href="www.google.com">
            <img class="logo-scope wd-10" src={myLogo} alt="Logo" />
          </a>
          <nav>
            <form action="/search" method="get">
              <input
                type="text"
                id="header-search"
                placeholder="Search.."
                name="s"
              />
              <button type="submit">Search</button>
            </form>
          </nav>
        </div>
        <div />
      </div>
    </>
  );
}

export default Navbar;
