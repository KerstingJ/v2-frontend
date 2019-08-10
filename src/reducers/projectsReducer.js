import "../actions";
import {
  GET_PREVIEW_PROJECTS,
  GET_PREVIEW_PROJECTS_FAILURE,
  GET_PREVIEW_PROJECTS_SUCCESS,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE
} from "../actions";

const initialState = {
  data: [],
  current: null,
  gettingPreview: false,
  gettingProject: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PREVIEW_PROJECTS:
      return {
        ...state,
        gettingPreview: true,
        error: null
      };
    case GET_PREVIEW_PROJECTS_FAILURE:
      return {
        ...state,
        gettingPreview: false,
        error: action.payload
      };
    case GET_PREVIEW_PROJECTS_SUCCESS:
      return {
        ...state,
        gettingPreview: false,
        data: action.payload
      };
    case GET_PROJECT:
      return {
        ...state,
        gettingProject: true,
        error: null
      };
    case GET_PROJECT_FAILURE:
      return {
        ...state,
        gettingProject: false,
        error: action.payload
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        gettingProject: false,
        current: action.payload
      };
    default:
      return state;
  }
};
