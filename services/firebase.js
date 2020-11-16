import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCveoFv3bhN8VuUeMjOSGYvkojHrnlBooA',
  authDomain: 'pseudosocial-43582.firebaseapp.com',
  databaseURL: 'https://pseudosocial-43582.firebaseio.com',
  projectId: 'pseudosocial-43582',
  storageBucket: 'pseudosocial-43582.appspot.com',
  messagingSenderId: '1035641499244',
  appId: '1:1035641499244:web:1be940eee8f1c77ae9b249',
  measurementId: 'G-LPMDB7YQ5J'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

firebase.auth().useDeviceLanguage()

export default firebase
