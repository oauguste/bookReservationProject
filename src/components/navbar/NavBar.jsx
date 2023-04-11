import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">augusteBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
