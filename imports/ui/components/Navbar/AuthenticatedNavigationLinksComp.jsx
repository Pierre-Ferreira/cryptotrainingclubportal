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
} from 'reactstrap';

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
          <NavLink to="/admin/schools_edit">Schools</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Modules
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <NavLink to="/tables" style={{ textDecoration: 'none', color: 'black' }}>
                x en ÷
              </NavLink>
            </DropdownItem>
            <DropdownItem >
              <NavLink to="/sums" style={{ textDecoration: 'none', color: 'black' }}>
              + en -
              </NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              PEMDAS
            </DropdownItem>
            <DropdownItem>
              Tyd
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink to="/auth/login" onClick={this.logoutFN}>Logout</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
