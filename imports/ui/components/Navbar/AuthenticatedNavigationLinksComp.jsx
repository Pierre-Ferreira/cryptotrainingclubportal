import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'react-bootstrap';

export default class AuthenticatedNavigationLinksComp extends Component {
  constructor(props) {
    super(props);
    this.logoutFN = this.logoutFN.bind(this);
  }

  logoutFN() {
    Meteor.logout((err) => {
      if (err) {
        console.log( err.reason );
      } else {
        this.props.toHomepage();
      }
    });
  }

  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/admin/import_existing">Import</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/auth/login" onClick={this.logoutFN}>Logout</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
