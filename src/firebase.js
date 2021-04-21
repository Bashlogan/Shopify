import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL2ran34FcToOMkKNuxoPWVwu4FG5tx0Q",
  authDomain: "shop-with-bash.firebaseapp.com",
  databaseURL: "https://shop-with-bash.firebaseio.com",
  projectId: "shop-with-bash",
  storageBucket: "shop-with-bash.appspot.com",
  messagingSenderId: "537965516634",
  appId: "1:537965516634:web:4f7db7ec906ac5098a4563",
  measurementId: "G-CTS90YCPQD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
