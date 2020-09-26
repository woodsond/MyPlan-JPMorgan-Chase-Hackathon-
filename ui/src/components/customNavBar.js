import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function CustomNavbar() {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="xl"
      bg="success"
      variant="light"
    >
      <ReactBootStrap.Navbar.Brand>
        MyPath
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="Articles">
            Financial Articles
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="MyPiggy">
            MyPiggy
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="CreditCards">
            Credit Cards
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default CustomNavbar;
