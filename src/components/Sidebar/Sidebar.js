import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Buttons from "../Buttons";

function Topnavbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
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
    <Navbar className="navbarbg fixed-top" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "navbarstyle"
              }
              to="/account"
            >
              PIANO
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "navbarstyle"
              }
              to="/QUIZ"
            >
              QUIZ
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "navbarstyle"
              }
              to="/pricing"
            >
              PRICING
            </NavLink>
          </Nav.Link>

          <NavDropdown
            title="LEARN MUSIC THEORY"
            id="basic-nav-dropdown"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "navbarstyle2"
                }
                to="/basics"
              >
                BASICS
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "navbarstyle2"
                }
                to="/intermediate"
              >
                INTERMEDIATE
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <h1 className="centered-h1">Gee's Music Theory</h1>

          <img
            src={require("../../content/piano_keys.png")}
            width="80"
            height="80"
            className="logonav"
          />

          <div className="right-button">
            {isAuthenticated ? (
              <div style={{ color: "white" }}>
                {" "}
                <Buttons
                  color={"danger"}
                  text={"Logout"}
                  onClick={handleLogout}
                ></Buttons>
              </div>
            ) : (
              <Buttons
                color={"light"}
                text={"Sign in"}
                onClick={signinbutton}
              ></Buttons>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;
