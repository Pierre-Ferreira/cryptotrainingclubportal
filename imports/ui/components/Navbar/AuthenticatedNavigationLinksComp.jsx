import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';

import {
  Nav,
  NavItem,
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
      <Nav>
        {this.props.userIsSuperAdmin ?
          <span>
            <NavLink to="/admin/blockchain_api">Blockchain API</NavLink>
            <NavLink to="/admin/import_existing">Import</NavLink>
          </span>
           : ''}
        <NavLink to="/auth/login" onClick={this.logoutFN}>Logout</NavLink>
      </Nav>
    );
  }
}

AuthenticatedNavigationLinksComp.propTypes = {
  userIsSuperAdmin: PropTypes.bool.isRequired,
  toHomepage: PropTypes.func.isRequired,
};
