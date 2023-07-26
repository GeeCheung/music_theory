import Nav from "react-bootstrap/Nav";

function StackedExample() {
  return (
    <Nav defaultActiveKey="/account" className="flex-column">
      <Nav.Link href="/account">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;
