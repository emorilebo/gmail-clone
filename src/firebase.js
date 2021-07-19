import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCudrSPf8td7SveNJExHRxhZjnSMwluRbU",
    authDomain: "clone-b27fa.firebaseapp.com",
    projectId: "clone-b27fa",
    storageBucket: "clone-b27fa.appspot.com",
    messagingSenderId: "915315808363",
    appId: "1:915315808363:web:5b8dec5c4a38ebe241f92e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };