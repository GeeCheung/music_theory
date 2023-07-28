import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Buttons from "../Buttons";

function Topnavbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Chords</Nav.Link>
          <Nav.Link href="#">Scales</Nav.Link>
          <NavDropdown title="Theory" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"> Harmony </NavDropdown.Item>
            <NavDropdown.Item href="#">keys</NavDropdown.Item>
            <NavDropdown.Item href="#">notes </NavDropdown.Item>
          </NavDropdown>
          <h1 className="centered-h1">music theory</h1>
          <div className="right-button">
            <Buttons
              color={"light"}
              text={"Logout"}
              onClick={handleLogout}
            ></Buttons>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;
