import * as types from '../constants/ActionTypes';

const initialState = {
  email: '',
};

const UserEmailInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_EMAIL_INFO:
      return {
        ...state,
        email: action.emailInfo.email,
      };
    default:
      return state;
  }
};

export default UserEmailInfo;
