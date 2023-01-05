import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">هفرووت</span>
        <div className="navItem">
          <button className="navButton">ثبت نام</button>
          <button className="navButton">ورود</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
