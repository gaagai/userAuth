import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC87mtCoe3JTagTTu30TH9bUQgK4Pnpz5c",
    authDomain: "form-test-88fef.firebaseapp.com",
    databaseURL: "https://form-test-88fef.firebaseio.com",
    projectId: "form-test-88fef",
    storageBucket: "form-test-88fef.appspot.com",
    messagingSenderId: "994240962055"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();


export {
    firebase,
    firebaseDB,
    googleAuth
}