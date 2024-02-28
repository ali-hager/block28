import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div id="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/blue">Blue</Link>
      <br />
      <Link to="/red">Red</Link>
      <br/>
      <Link to="/green">Green</Link>
      </div>
    </>
  );
}

export default Navbar;
