import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import CreditCards from "./pages/CreditCards";
import Piggy from "./pages/Piggy";
import Login from "./pages/Login";

const App = (props) => {
  const [isAuthenticated] = React.useState(false);
  return (
    <>
      {isAuthenticated ? (
        <Router>
          <Container fluid={true}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Toggle aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <h5>
                    <Link className="nav-link navtext" to="/">
                      Home
                    </Link>
                  </h5>
                  <h5>
                    <Link className="nav-link navtext" to="/piggyBank">
                      myPiggy
                    </Link>
                  </h5>
                  <h5>
                    <Link className="nav-link navtext" to="/articles">
                      Articles
                    </Link>
                  </h5>
                  <h5>
                    <Link className="nav-link navtext" to="/creditCards">
                      Credit Cards
                    </Link>
                  </h5>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/piggyBank" render={() => <Piggy />} />
            <Route path="/articles" render={() => <Articles />} />
            <Route path="/creditCards" render={() => <CreditCards />} />
            <Route path="/" exact render={() => <Home />} />
          </Container>
        </Router>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default App;
