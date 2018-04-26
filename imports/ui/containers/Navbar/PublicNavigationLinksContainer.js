import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import PublicNavigationLinksComp from '../../components/Navbar/PublicNavigationLinksComp';

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
    toLoginPage: () => dispatch(push('/login')),
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(PublicNavigationLinksComp);