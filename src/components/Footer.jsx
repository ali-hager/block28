import { Link } from "react-router-dom";

function Footer(){
  return(
    <>
    <div id="footer">
      <Link to="/">Home</Link>
      <br />
      <Link to="/blue">Blue</Link>
      <br />
      <Link to="/red">Red</Link>
      <br />
      <Link to="/green">Green</Link>
    </div>
    </>
  );
}

export default Footer