import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
} from 'reactstrap';

const PublicNavigationLinksComp = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink to="/auth/login" activeClassName="active">Login</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/auth/signup" activeClassName="active">signup</NavLink>
    </NavItem>
  </Nav>
);

export default PublicNavigationLinksComp;
