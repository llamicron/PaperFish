import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB4CO_c9s_Brg2v7Ux67D0Du_sRqlsfNsI",
  authDomain: "paperfish-29e4f.firebaseapp.com",
  databaseURL: "https://paperfish-29e4f.firebaseio.com",
  projectId: "paperfish-29e4f",
  storageBucket: "paperfish-29e4f.appspot.com",
  // messagingSenderId: "sender-id",
  appId: "1:669187489603:web:bf46e38fad63a8966a39f6",
  // measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {}
db.settings(settings)

// firebase collections
// const usersCollection = db.collection('users')
