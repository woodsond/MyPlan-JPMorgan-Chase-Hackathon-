import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import Home from './pages/Home';
import Articles from './pages/Articles';
import CreditCards from './pages/CreditCards';
import Piggy from './pages/Piggy';

//Compontents
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       title: 'myPath',
       headerLinks:
       [
         { title: 'myPiggy', path: "/piggyBank"},
         { title: 'Article', path: "/article"},
         { title: 'Credit Cards', path: "/creditcards"}
       ],
       home: {
         title: "Home",
       },
       piggyBank: {
          title: "My Piggy Bank",
       },
       articles: {
         title: "Articles",
       },
       creditCards: {
         title: "creditCards",
       }
    }
  }
  render(){
    return(
      <Router>
        <Container fluid={true}>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
              <h5> <Link className="nav-link navtext" to="/">Home</Link></h5>
                  <h5> <Link className="nav-link navtext" to="/piggyBank">myPiggy</Link></h5>
                  <h5> <Link className="nav-link navtext" to="/articles">Articles</Link></h5>
                  <h5> <Link className="nav-link navtext" to="/creditCards">Credit Cards</Link></h5>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} />} />
          <Route path="/piggyBank" exact render={() => <Piggy title={this.state.piggyBank.title}/>} />
          <Route path="/articles" render={() => <Articles title={this.state.articles.title} />} />
          <Route path="/creditCards" render={() => <CreditCards title={this.state.creditCards.title} />} /> 
        </Container>
      </Router>
    );
  }
}

export default App;