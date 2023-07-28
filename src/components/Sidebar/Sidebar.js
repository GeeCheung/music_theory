import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
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
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/account"
            >
              Piano
            </Link>
          </Nav.Link>
          <NavDropdown title="Learn Music Theory" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/Basics"
              >
                Basics
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/intermediate"
              >
                Intermediate
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <h1 className="centered-h1">Gee's Music Theory</h1>

          <div className="right-button">
            {isAuthenticated ? (
              <Buttons
                color={"light"}
                text={"Logout"}
                onClick={handleLogout}
              ></Buttons>
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
