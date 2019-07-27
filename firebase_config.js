import firebase from "firebase";

let firebaseConfig = {
  apiKey: $REACT_APP_apiKey,
  authDomain: $REACT_APP_authDomain,
  databaseURL: $REACT_APP_databaseURL,
  projectId: $REACT_APP_projectId,
  storageBucket: $REACT_APP_storageBucket,
  messagingSenderId: $REACT_APP_messagingSenderId,
  appId: $REACT_APP_appId
};

firebase.initializeApp(firebaseConfig);

export let db = firebase.database();
