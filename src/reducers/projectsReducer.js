import "../actions";
import {
  GET_PREVIEW_PROJECTS,
  GET_PREVIEW_PROJECTS_FAILURE,
  GET_PREVIEW_PROJECTS_SUCCESS
} from "../actions";

const initialState = {
  data: [],
  gettingPreview: false,
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
    default:
      return state;
  }
};
