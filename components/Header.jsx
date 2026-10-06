

import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>WELCOME TO SAU</h1>
      <div style={{ textAlign: "center" }}>
        <Link to="/" style={linkStyle}>HOME</Link> |
        <Link to="/about" style={linkStyle}>ABOUT</Link> |
        <Link to="/contact" style={linkStyle}>CONTACT</Link> |
        <Link to="/dti/sau/product" style={linkStyle}>PRODUCT</Link>
      </div>
      <hr style={{ border: "0", height: "2px", backgroundColor: "#1760fd", width: "80%", margin: "20px auto" }} />
    </>
  );
}