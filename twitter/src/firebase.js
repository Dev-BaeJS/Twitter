import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZbBVuKLb0CZ5Q8pP2AF_zKsdbA9bIHr4",
  authDomain: "twitter-8e3bf.firebaseapp.com",
  projectId: "twitter-8e3bf",
  storageBucket: "twitter-8e3bf.appspot.com",
  messagingSenderId: "941759034581",
  appId: "1:941759034581:web:fe3104e2969ef8ba249e5c"
};

export default firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);