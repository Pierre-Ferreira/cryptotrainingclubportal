import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import gameSettings from './GameSettings';
// import gameAnswers from './GameAnswers';
// import gameCurrentAnswer from './GameCurrentAnswer';
// import gameScore from './GameScore';
import IntroducerInfo from './IntroducerInfo';
import SignupInfo from './SignupInfo';

const gameInfo = combineReducers({
  // gameSettings,
  // gameAnswers,
  // gameCurrentAnswer,
  // gameScore,
  IntroducerInfo,
  SignupInfo,
  routing: routerReducer,
});

export default gameInfo;
