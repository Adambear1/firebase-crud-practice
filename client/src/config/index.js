import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNhT8e2JmQN_TYULr9-3siSknBFfs1ohw",
  authDomain: "fir-crud-practice-bede1.firebaseapp.com",
  databaseURL: "https://fir-crud-practice-bede1.firebaseio.com",
  projectId: "fir-crud-practice-bede1",
  storageBucket: "fir-crud-practice-bede1.appspot.com",
  messagingSenderId: "669760252818",
  appId: "1:669760252818:web:4f660d377eadb8c0f8ef4b",
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
