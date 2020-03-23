import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: 'AIzaSyDwS7AauAFYQBZRAYm32aQzSWD-4jVt2-E',
    authDomain: 'quila-dev.firebaseapp.com',
    databaseURL: 'https://quila-dev.firebaseio.com',
    projectId: 'quila-dev',
    storageBucket: 'quila-dev.appspot.com',
    messagingSenderId: '898205392296',
    appId: '1:898205392296:web:70281ae8961e7af09e919d',
    measurementId: 'G-8273JF0W7V'
  }

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

firebase.auth().useDeviceLanguage()

export default firebase
