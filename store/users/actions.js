import firebase from '~/services/firebase'

export function register({ commit }, userInput) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(userInput.email, userInput.password).then((response) => {
      const user = {
        uid: response.user.uid,
        username: userInput.name.split(' ')[0].toLowerCase(),
        displayName: userInput.name,
        email: userInput.email,
        photoURL: userInput.avatar,
        createdAt: new Date()
      }
      return firebase.firestore().collection('users').doc(response.user.uid).set(user).then(() => {
        commit('auth', user)
        resolve(user)
      }).catch(e => reject(e))
    }).catch(e => reject(e))
  })
}

export function login({ commit }, userInput) {
  return new Promise((resolve, reject) => {
    const { email, password } = userInput
    firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
      return firebase.firestore().collection('users').doc(response.user.uid).get().then((doc) => {
        const userData = doc.exists ? doc.data() : null
        commit('auth', userData)
        resolve(userData)
      }).catch(e => reject(e))
    }).catch(e => reject(e))
  })
}

export function logout({ commit }) {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(function () {
      commit('auth', null)
      resolve()
    }).catch(e => reject(e))
  })
}

export function friends({ commit, dispatch }) {
  return new Promise((resolve, reject) => {
    try {
      firebase.firestore().collection('users').onSnapshot((snapshot) => {
        const users = []
        snapshot.forEach((doc) => {
          const userData = doc.data()
          users.push(userData)
          dispatch('messages', userData.uid)
        })
        commit('all', users)
        commit('friends', users)
        resolve()
      })
    } catch (error) {
      reject(error)
    }
  })
}

export function messages({ commit }, friendUid) {
  return new Promise((resolve, reject) => {
    try {
      firebase.auth().onAuthStateChanged((userAuth) => {
        if (userAuth) {
          const messages = {}
          firebase.firestore().collection('messages').where('sent', '==', userAuth.uid).where('received', '==', friendUid).onSnapshot((snapshotSents) => {
            snapshotSents.forEach((doc) => {
              messages[doc.id] = Object.assign({}, doc.data(), { id: doc.id, sync: !doc.metadata.hasPendingWrites })
            })
            firebase.firestore().collection('messages').where('received', '==', userAuth.uid).where('sent', '==', friendUid).onSnapshot((snapshotReceiveds) => {
              snapshotReceiveds.forEach((doc) => {
                messages[doc.id] = Object.assign({}, doc.data(), { id: doc.id, sync: !doc.metadata.hasPendingWrites })
              })
              const messagesFiltered = {
                uid: friendUid,
                messages: Object.values(messages).sort((a, b) => b.timestamp - a.timestamp)
              }
              commit('messages', messagesFiltered)
              commit('talk')
              resolve()
            })
          })
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}

export function sendMessage({ state }, body) {
  return new Promise((resolve, reject) => {
    const message = {
      sent: state.auth.uid,
      received: state.opened.uid,
      body,
      timestamp: new Date().getTime()
    }
    firebase.firestore().collection('messages').doc().set(message).then(() => {
      resolve()
    }).catch(err => reject(err))
  })
}

export function resetPassword({ commit }, email) {
  return new Promise((resolve, reject) => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      resolve()
    }).catch(e => reject(e))
  })
}

export function auth({ commit }, uid) {
  return new Promise((resolve, reject) => {
    try {
      firebase.firestore().collection('users').doc(uid).onSnapshot((doc) => {
        commit('auth', doc.exists ? doc.data() : null)
        resolve()
      })
    } catch (error) {
      reject(error)
    }
  })
}
