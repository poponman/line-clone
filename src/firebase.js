import firebase from "firebase/compat/app";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyAcdl66xBnl26dFCSV-bkxRVh5ospmF5qw",
  authDomain: "line-clone-be1c2.firebaseapp.com",
  projectId: "line-clone-be1c2",
  storageBucket: "line-clone-be1c2.firebasestorage.app",
  messagingSenderId: "601991385404",
  appId: "1:601991385404:web:f4707353ad6d0b99f9ce39"
});

const db = firebaseApp.firestore();

const auth = firebase.auth(); //認証情報

export { db, auth};