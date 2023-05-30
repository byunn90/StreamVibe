import myLogo from "../images/production.png";

function Navbar() {
  return (
    <>
      <div className="bg-blue-500 p-4">
        <a href="www.google.com">
          <img src={myLogo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-container">
        <nav></nav>
      </div>
    </>
  );
}

export default Navbar;
