import { db } from "../firebase_config";

// GET_PROJECTS_LIST, GET_PROJECTS_LIST_SUCCESS, GET_PROJECTS_LIST_FAILURE
export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";
export const GET_PROJECTS_LIST_SUCCESS = "GET_PROJECTS_LIST_SUCCESS";
export const GET_PROJECTS_LIST_FAILURE = "GET_PROJECTS_LIST_FAILURE";

export const getProjectsList = () => dispatch => {
  dispatch({
    type: GET_PROJECTS_LIST
  });
};

// GET_PREVIEW_PROJECTS, GET_PREVIEW_PROJECTS_SUCCESS, GET_PREVIEW_PROJECTS_FAILURE
export const GET_PREVIEW_PROJECTS = "GET_PREVIEW_PROJECTS";
export const GET_PREVIEW_PROJECTS_SUCCESS = "GET_PREVIEW_PROJECTS_SUCCESS";
export const GET_PREVIEW_PROJECTS_FAILURE = "GET_PREVIEW_PROJECTS_FAILURE";

export const getPreviewProjects = () => dispatch => {
  dispatch({
    type: GET_PREVIEW_PROJECTS
  });

  var data = db
    .collection("projects")
    .limit(4)
    .orderBy("date", "desc");

  data
    .get()
    .then(snapshot => {
      dispatch({
        type: GET_PREVIEW_PROJECTS_SUCCESS,
        payload: snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PREVIEW_PROJECTS_FAILURE,
        payload: error
      });
    });
};

// GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE
export const GET_PROJECT = "GET_PROJECT";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_PROJECT_FAILURE = "GET_PROJECT_FAILURE";

export const getProject = proj_id => dispatch => {
  dispatch({
    type: GET_PROJECT
  });

  var data = db.collection("projects").doc(proj_id);

  data
    .get()
    .then(snapshot => {
      if (!snapshot.exists) {
        throw new Error("Document Does Not Exist");
      }
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: snapshot.data()
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PROJECT_FAILURE,
        payload: error
      });
    });
};

// GET_ALL_PROJECTS, GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_FAILURE
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
export const GET_ALL_PROJECTS_SUCCESS = "GET_ALL_PROJECTS_SUCCESS";
export const GET_ALL_PROJECTS_FAILURE = "GET_ALL_PROJECTS_FAILURE";

export const getAllProjects = () => dispatch => {
  dispatch({
    type: GET_ALL_PROJECTS
  });

  var data = db.collection("projects").orderBy("date", "desc");

  data
    .get()
    .then(snapshot => {
      dispatch({
        type: GET_ALL_PROJECTS_SUCCESS,
        payload: snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_PROJECTS_FAILURE,
        payload: error
      });
    });
};
