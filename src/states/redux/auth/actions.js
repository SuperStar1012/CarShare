import { API_BASE_URL } from '../../../config/serverApiConfig';
import * as actionTypes from './types';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { replaceOne } from '../../../../server/models/user';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();
const assetUrl = "auth"
export const getAuthData = (token) => async(dispatch) => {
    const response = await axios.post(API_BASE_URL + assetUrl + '/getAuthData', {token: token});
    if(response.data){
        await dispatch({
            type: actionTypes.SET_AUTH,
            payload: response.data
        })
    }
}
export const editUserData = (data) => async(dispatch) => {
    const response = await axios.post(API_BASE_URL + assetUrl + '/editUserData', data);
    if(response.data){
        await dispatch({
            type: actionTypes.SET_AUTH,
            payload: response.data
        })
    }
}
export const register = ({ registerData }) => async (dispatch) => {
    const response = await axios.post(API_BASE_URL + assetUrl + '/register', registerData);
    if (!response.data) {
        await dispatch({
            type: actionTypes.ERROR,
            payload: response.data
        })
    }
    else {
        await dispatch({
            type: actionTypes.SAVE_REGISTER_DATA,
            payload: response.data
        })
        await dispatch(emailVerify(registerData.email));
    }
}
export const verifySuccess = (type) => async (dispatch) => {
    dispatch({
        type: actionTypes.VERIFY_SUCCESS,
        payload: type
    })
}

export const emailVerify = (email) => async (dispatch) => {
    const response = await axios.post(API_BASE_URL + assetUrl + '/emailVerifyNumber', { "email": email });
    const verifyNumber = response.data;
    if (verifyNumber) {
        dispatch({
            type: actionTypes.MAIL_VERIFY_REQUEST_SUCCESS,
            payload: response.data
        })
    }
    return response.data;
}

export const phoneVerify = (phone) => async (dispatch) => {
    const response = await axios.post(API_BASE_URL + assetUrl + '/phoneVerify', { "phone": phone });
    const verifyNumber = response.data;
    console.log(verifyNumber)
    if (verifyNumber) {
        dispatch({
            type: actionTypes.PHONE_VERIFY_REQUEST_SUCCESS,
            payload: response.data
        })
    }
    return response.data;
}

export const registerAccount = (userData) => async (dispatch) => {
    const response = await axios.post(API_BASE_URL + 'auth/registerAccount', { "data": userData });
    console.log(response.data)
}

export const login = (data) => async (dispatch) => {
    const response = await axios.post(API_BASE_URL + "auth/login", data);
    console.log(response.data);
    const {token} = response.data;
    dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data
    })
    await AsyncStorage.setItem('userToken',token);
    const sessionData = await AsyncStorage.getItem('userToken');
}

export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem('userToken');
    dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
    })
}
