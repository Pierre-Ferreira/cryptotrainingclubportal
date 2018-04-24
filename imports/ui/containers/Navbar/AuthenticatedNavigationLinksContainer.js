import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import AuthenticatedNavigationLinksComp from '../../components/Navbar/AuthenticatedNavigationLinksComp';

const mapTrackerToProps = (state, props) => {
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
  };
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toHomepage: () => dispatch(push('/')),
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(AuthenticatedNavigationLinksComp);
