
import faker from 'faker'

class User {
  constructor(data = {}, options = {}) {
    faker.locale = options.locale || 'pt_BR'
    this.data = {
      id: data.id || faker.random.uuid(),
      createdAt: data.createdAt || new Date(),
      name: data.name || '',
      avatar: data.avatar || faker.image.avatar(),
      username: data.username || '',
      password: data.password || ''
    }
  }
}

export default User
