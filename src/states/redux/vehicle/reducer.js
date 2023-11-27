import * as actionTypes from './types';

const INITIAL_STATE = {
  current: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isVerifiedEmail: false,
  isVerifiedPhone: false,
  mailVerifyNumber: "",
  phoneVerifyNumber: "",
  errorMessage: "",
  userData: {},
  registerData: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MAIL_VERIFY_REQUEST_SUCCESS:
      return {
        ...state,
        mailVerifyNumber: action.payload
      };
    case actionTypes.PHONE_VERIFY_REQUEST_SUCCESS:
      return {
        ...state,
        phoneVerifyNumber: action.payload
      };
    case actionTypes.SAVE_REGISTER_DATA:
      return {
        ...state,
        registerData: action.payload
      };
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };

    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        current: action.payload,
        isLoading: false,
        isLoggedIn: true,
        isSuccess: true,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionTypes.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifiedEmail: action.payload == "email" ? true : false,
        isVerifiedPhone: action.payload == "phone" ? true : false
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload.userData
      }

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state;
  }
};

export default authReducer;
