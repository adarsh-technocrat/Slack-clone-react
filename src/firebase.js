import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqHyBflJuYFWsY_1vg-My1Vly9cJ4G6Ek",
    authDomain: "slack-clone-c1839.firebaseapp.com",
    projectId: "slack-clone-c1839",
    storageBucket: "slack-clone-c1839.appspot.com",
    messagingSenderId: "935519091181",
    appId: "1:935519091181:web:30b6e71287964775fdcfe4",
    measurementId: "G-VV2G8P9ZV0"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider,db};

