'use strict'

const fs = require('fs')
const usersData = require('./data/users.json')
module.exports = {
  get (slackHandle) {
    return usersData.find((user) => user.id === slackHandle)
  },

  getRealName (slackHandle) {
    const user = this.get(slackHandle)
    if (user) return user.name
    return null
  },

  getAvatar (slackHandle) {
    const user = this.get(slackHandle)
    if (user) return user.profile.image_48 // should check for property existence
    return null
  }
}
