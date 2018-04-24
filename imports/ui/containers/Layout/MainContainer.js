import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../../components/Layout/MainComp';

const mapTrackerToProps = (state, props) => {
  // if (Meteor.subscribe('posts').ready()) {
  //   return { posts: Posts.find().fetch() };
  // }
  // return { posts: [] };
  const loggingIn = Meteor.loggingIn();
  return {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
    currentUser: Meteor.user(),
  };
  // return {
  //   currentUser: Meteor.user(),
  //   isAuthenticated: Meteor.userId() !== null,
  // };
};

function mapStateToProps(state) {
  return {
    // currentAnswer: state.gameCurrentAnswer.currentAnswer,
    // numberOfCorrect: state.gameScore.numberOfCorrect,
    // percentageCorrect: state.gameScore.percentageCorrect,
    // gameNoOfQuestions: state.gameSettings.gameNoOfQuestions,
    // gameUpperRangeLimit: state.gameSettings.gameUpperRangeLimit,
    // gameType: state.gameSettings.gameType,
    // gameQuestionTime: state.gameSettings.gameQuestionTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // saveAnswerInfo: answerObject => dispatch({
    //   type: 'SAVE_ANSWER_INFO',
    //   answerObject,
    // }),
    // updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    // saveGameScore: (numberOfCorrect, percentageCorrect) => dispatch({ type: 'SAVE_GAME_SCORE', numberOfCorrect, percentageCorrect }),
    // startGame: () => dispatch({ type: 'START_GAME' }),
    // endGame: () => dispatch({ type: 'END_GAME' }),
    toLoginPage: () => dispatch(push('/auth/login')),
  };
}

export default withRouter(connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(MainPage));


// import { createContainer } from 'meteor/react-meteor-data';
// import MainPage from '../components/MainPage';
//
// export default MainContainer = createContainer(({ params }) => {
//   const currentUser = Meteor.user();
//   return {
//     currentUser,
//   };
// }, MainPage);
