import axios from 'axios';

const initialState = {
  users: {},
  username: '',
  password: '',
  users_id: '',
  img: '',
  user: {}
};

const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_USERS_ID = 'UPDATE_USERS_ID';

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

export const updateUsersId = users_id => {
  return {
    type: UPDATE_PASSWORD,
    payload: users_id
  };
};

export const getUser = (username, password) => {
  return {
    type: GET_USER,
    payload: axios.post('/api/get_user', {username, password})
  };
};

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios.get('/api/users')
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        users: action.payload
      };
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
    case UPDATE_USERS_ID:
      return {
        ...state,
        users_id: action.payload
      };
    default:
      return state;
  }
}
