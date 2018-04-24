import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
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
        <Navbar color="faded" className="navbar-dark bg-dark" light expand="md">
          <NavbarBrand>
            {/* <NavLink to="/">MATHCOMBAT</NavLink> */}
            MATHCOMBAT
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { renderNavigationLinks(this.props.authenticated) }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
