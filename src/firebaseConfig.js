import firebase from 'firebase'
import 'firebase/firestore'
// Put firebase config object in src/secrets.js
import firebaseConfig from '@/secrets.js';

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
