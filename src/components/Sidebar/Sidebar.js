import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router";
import "./Sidebar.css";

function StackedExample() {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="account">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: " 1.5em" }}></i>
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="message">
          <NavIcon>
            <i
              className="fa fa-fw fa-message"
              style={{ fontSize: " 1.5em" }}
            ></i>
          </NavIcon>
          <NavText>Message</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default StackedExample;
