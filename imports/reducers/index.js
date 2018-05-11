import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import UserPersonalInfo from './UserPersonalInfo';
import UserInfo from './UserInfo';
import IntroducerInfo from './IntroducerInfo';
import SignupInfo from './SignupInfo';
// import UserEmailInfo from './UserEmailInfo';

const generalInfo = combineReducers({
  UserInfo,
  // UserPersonalInfo,
  // UserEmailInfo,
  IntroducerInfo,
  SignupInfo,
  routing: routerReducer,
});

export default generalInfo;
