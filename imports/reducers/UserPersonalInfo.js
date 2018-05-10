import * as types from '../constants/ActionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  cellNo: '',
};

const UserPersonalInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER_PERSONAL_INFO:
      return {
        ...state,
        firstName: action.userPersonalInfo.firstName,
        lastName: action.userPersonalInfo.lastName,
        cellNo: action.userPersonalInfo.cellNo,
      };
    default:
      return state;
  }
};

export default UserPersonalInfo;
