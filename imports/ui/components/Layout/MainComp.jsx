import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';
import SchoolsEditComp from '../Admin/SchoolsEditComp';
// import TablesMainComp from './components/TablesModule/TablesMainComp';
// import SumsMainComp from './components/SumsModule/SumsMainComp';
// components
import HomepageComp from '../Main/HomepageComp';
import WelcomeComp from '../../containers/Main/WelcomeContainer';
import SignupContainer from '../../containers/Auth/SignupContainer';
import LoginContainer from '../../containers/Auth/LoginContainer';
import ResetPasswordContainer from '../../containers/Auth/ResetPasswordContainer';
import ForgotPasswordContainer from '../../containers/Auth/ForgotPasswordContainer';
import AuthenticatedRouteComp from '../Routes/AuthenticatedRouteComp';
import PublicRouteComp from '../Routes/PublicRouteComp';
// import { withHistory, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <div>
        <Container>
          <div>
            <Switch>
              <Route exact path="/" component={HomepageComp} />
              <AuthenticatedRouteComp exact path="/admin/schools_edit" component={SchoolsEditComp} {...this.props} />
              <PublicRouteComp exact path="/auth/login" component={LoginContainer} {...this.props} />
              <PublicRouteComp exact path="/auth/signup" component={SignupContainer} {...this.props} />
              <PublicRouteComp exact path="/auth/forgot_password" component={ForgotPasswordContainer} {...this.props} />
              <PublicRouteComp exact path="/auth/reset-password/:token" component={ResetPasswordContainer} {...this.props} />
              <AuthenticatedRouteComp exact path="/main/welcome" component={WelcomeComp} {...this.props} />
              {/* <Route exact path="/" component={AppContainer} /> */}
            </Switch>
            {/* <ModalRoute component={LoginComp} path="/auth/login" className="test-modal test-modal-foo" />
            <ModalRoute component={SignupComp} path="/auth/signup" className="test-modal test-modal-foo" />
            <ModalRoute component={SchoolsEditComp} path="/admin/schools_edit" className="test-modal test-modal-foo" />
            <ModalContainer /> */}
          </div>
        </Container>
      </div>
    );
  }
}
//
// MainPage.propTypes = {
//   // username: React.PropTypes.string
// };
