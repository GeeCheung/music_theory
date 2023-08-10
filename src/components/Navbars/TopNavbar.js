import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Buttons from "../Buttons";
import "./TopNavbar.css";

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
    <nav>
      <img
        src={require("../../content/piano_keys.png")}
        width="80px"
        height="80px"
      />
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
          <NavLink to="/account">Home</NavLink>
        </li>
        <li>
          <NavLink to="/quiz">Piano Quiz</NavLink>
        </li>
        <li>
          <NavLink to="/basics">Basics</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/contact-me">Contact</NavLink>
        </li>
        <div className="btnlogout">
          {isAuthenticated ? (
            <Buttons
              color={"secondary"}
              text={"Logout"}
              onClick={handleLogout}
            ></Buttons>
          ) : (
            <Buttons
              color={"secondary"}
              text={"Sign in"}
              onClick={signinbutton}
            ></Buttons>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Topnavbar;
