import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyAGEtLecZZOfLnmWe1_GyzfdZ6x7ldPTQU',
  authDomain: 'chatin-5514f.firebaseapp.com',
  databaseURL: 'https://chatin-5514f.firebaseio.com',
  projectId: 'chatin-5514f',
  storageBucket: 'chatin-5514f.appspot.com',
  messagingSenderId: '447977689634'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

firebase.auth().useDeviceLanguage()

export default firebase
