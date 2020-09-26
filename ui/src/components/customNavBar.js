import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function CustomNavBar() {
  return (
    <div className="MyPath Virtual Series">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="success"
        variant="light"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          MyPath Virtual Series
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="MyPiggy">
              MyPiggy
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="CreditCards">
              Credit Cards
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="Articles">
              Financial Articles
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link aria-disabled="true">
              Powering youth potential, seeding economnic mobility!
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default CustomNavBar;