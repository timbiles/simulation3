import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  id: '',
  img: ''
};

const GET_USER = 'GET_USER';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updateUsername = username => {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
};

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get('/api/users')
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
}
