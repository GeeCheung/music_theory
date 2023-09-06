import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./TopNavbar.css";

import NavDropdown from "react-bootstrap/NavDropdown";

function Topnavbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAuthenticated = !!user;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const signinbutton = async () => {
    try {
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <motion.nav>
      <a href="/account">
        <img
          src={require("../../content/piano_keys.png")}
          width="80px"
          height="80px"
        />{" "}
      </a>
      <Link to="/" className="title">
        Music Theory - 101
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavDropdown title="Learn" id="basic-nav-dropdown" className="drop">
            <NavDropdown.Item href="/account">
              Understanding Chords & Scales
            </NavDropdown.Item>
          </NavDropdown>
        </li>
        <li>
          <NavLink to="/quiz">Quiz Yourself</NavLink>
        </li>

        {/*  <li>
          <NavLink to="/post">Post</NavLink>
        </li> */}
        {/*  <li>
          <NavLink to="/contact-me">Contact</NavLink>
        </li> */}
        {/*      {isAuthenticated ? (
          <button className="btnlogout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button onClick={signinbutton}>Sign in</button>
        )} */}
      </ul>
    </motion.nav>
  );
}

export default Topnavbar;
