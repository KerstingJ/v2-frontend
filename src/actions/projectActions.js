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

  // TODO: build out actual ajax request

  var data = db.collection("projects").limit(4);

  data
    .get()
    .then(snapshot => {
      dispatch({
        type: GET_PREVIEW_PROJECTS_SUCCESS,
        payload: snapshot.docs.map(doc => doc.data())
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PREVIEW_PROJECTS_FAILURE,
        payload: error
      });
    });

  /*   const dummyData = [
    {
      name: "Level Up",
      short:
        "A Multi-page marketing website for an app based on Stanfords design your life. Built with HTML, CSS, LESS, Javascript. Featuring custom made reusable components and an amazing visual Aesthetic.",
      imageUrl: "./images/lvl.jpg",
      link: ""
    },
    {
      name: "Not Level Up",
      short:
        "A Multi-page marketing website for an app based on Stanfords design your life. Built with HTML, CSS, LESS, Javascript. Featuring custom made reusable components and an amazing visual Aesthetic.",
      imageUrl: "./images/partyplanner.jpg",
      link: ""
    },
    {
      name: "Project B",
      short:
        "A Multi-page marketing website for an app based on Stanfords design your life. Built with HTML, CSS, LESS, Javascript. Featuring custom made reusable components and an amazing visual Aesthetic.",
      imageUrl: "./images/simple.jpg",
      link: ""
    },
    {
      name: "Level Down",
      short:
        "A Multi-page marketing website for an app based on Stanfords design your life. Built with HTML, CSS, LESS, Javascript. Featuring custom made reusable components and an amazing visual Aesthetic.",
      imageUrl: "./images/tiemeNdo.jpg",
      link: ""
    }
  ];

  dispatch({
    type: GET_PREVIEW_PROJECTS_SUCCESS,
    payload: dummyData
  }); */
};
