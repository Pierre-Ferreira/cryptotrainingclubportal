import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'react-bootstrap';
import AuthenticatedNavigationLinksContainer from '../../containers/Navbar/AuthenticatedNavigationLinksContainer';
import PublicNavigationLinksContainer from '../../containers/Navbar/PublicNavigationLinksContainer';
// import './NavbarComp.css';

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const renderNavigationLinks = authenticated =>
      (authenticated ?
        <AuthenticatedNavigationLinksContainer /> :
        <PublicNavigationLinksContainer />
      );
    return (
      <div>
        <Navbar color="faded" className="navbar-dark bg-dark">
          <Navbar.Brand>
            {/* <NavLink to="/">MATHCOMBAT</NavLink> */}
            CryptoLearning.Club
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.toggle} />
          <Navbar.Collapse>
            { renderNavigationLinks(this.props.authenticated) }
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
