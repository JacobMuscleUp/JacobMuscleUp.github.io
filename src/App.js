import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SkillPage from './components/SkillPage';
import PortfolioPage from './components/PortfolioPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Jacob Chan</NavbarBrand>
            <Collapse isOpen={true} navbar>
              <Nav className="ml-auto" navbar>
                <Link className="Navbar-padding" to="/">
                  About
                </Link>
                <Link className="Navbar-padding" to="/contact">
                  Contact
                </Link>
                <Link className="Navbar-padding" to="/skill">
                  Skill
                </Link>
                <Link className="Navbar-padding" to="/portfolio">
                  Portfolio
                </Link>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/skill" component={SkillPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
