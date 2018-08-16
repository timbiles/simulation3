import axios from 'axios';
import { strictEqual } from 'assert';

const initialState = {
  posts: {},
  title: '',
  img: '',
  content: ''
};

const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_CONTENT = 'UPDATE_CONTENT';

export const updateTitle = title => {
  return {
    type: UPDATE_TITLE,
    payload: title
  };
};

export const updateImg = img => {
  return {
    type: UPDATE_IMG,
    payload: img
  };
};

export const updateContent = content => {
  return {
    type: UPDATE_CONTENT,
    payload: content
  };
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
