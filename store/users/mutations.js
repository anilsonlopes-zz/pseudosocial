import { random } from 'faker'

export const auth = function (state, user) {
  state.auth = user
}

export const search = function (state, search) {
  state.friends = state.all.filter(record => record.username.toLowerCase().indexOf(search.toLowerCase()) !== -1 || (record.displayName || '').toLowerCase().indexOf(search.toLowerCase()) !== -1)
}

export const opened = function (state, uid) {
  state.opened = state.friends.find(friend => friend.uid === uid)
}

export const all = function (state, users) {
  state.all = users
}

export const friends = function (state, friends) {
  state.friends = friends
}

export const messages = function (state, { uid, messages }) {
  state.messages[uid] = messages
}

export const talk = function (state) {
  if (!state.opened) return !1
  state.talk = state.messages[state.opened.uid]
}

export const notification = function (state, notification) {
  const id = random.uuid()
  state.notifications.push(Object.assign({}, notification, { id }))
}

export const removeNotification = function (state, id) {
  state.notifications = state.notifications.filter(notification => notification.id !== id)
}
