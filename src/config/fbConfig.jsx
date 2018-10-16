import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLNp95VBN51iMuXKHD4B8oEY_QEUinrmY",
  authDomain: "pmt-tool-redux.firebaseapp.com",
  databaseURL: "https://pmt-tool-redux.firebaseio.com",
  projectId: "pmt-tool-redux",
  storageBucket: "",
  messagingSenderId: "942322366418"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
