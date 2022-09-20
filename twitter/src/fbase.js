import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider , signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

export const SignInWithPopup = signInWithPopup;
export const googleAuthProvider = GoogleAuthProvider;
export const githubAuthProvider = GithubAuthProvider;
export const authService = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const dbService = getFirestore(app);
export { collection } from 'firebase/firestore';

// "firebase" -v === 
// https://velog.io/@seondal/Firebase-v9%EB%B6%80%ED%84%B0-%EB%8B%AC%EB%9D%BC%EC%A7%84-%EC%9D%B8%EC%A6%9D%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%EB%B2%95

// "firestore" -v ===
// https://kyounghwan01.github.io/blog/etc/firebase/#%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%A9%E1%84%80%E1%85%A5%E1%86%AB