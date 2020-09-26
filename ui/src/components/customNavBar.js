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
      <ReactBootStrap.Navbar.Brand
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <i className={"fas fa-piggy-bank pr-2"} />
        MyPlan
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
        <ReactBootStrap.Nav>
          <ReactBootStrap.NavDropdown
            alignRight
            title={`${localStorage.getItem("username")}`}
            id="collasible-nav-dropdown"
          >
            <ReactBootStrap.NavDropdown.Item
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default CustomNavbar;
