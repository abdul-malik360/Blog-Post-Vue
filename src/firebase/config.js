import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArm8-27PSHWPQg4SUNxsduYtrHU2Vc4VQ",
  authDomain: "vue-firebase-site-a575f.firebaseapp.com",
  projectId: "vue-firebase-site-a575f",
  storageBucket: "vue-firebase-site-a575f.appspot.com",
  messagingSenderId: "967445735247",
  appId: "1:967445735247:web:7d535b14ef12df2b6cc73a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
