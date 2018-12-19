export default class User {
  constructor() {
    this.userId = null
    this.permissions = []
    this.groups = []

    this.setUser = this.setUser.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.hasPermission = this.hasPermission.bind(this)
    this.hasGroupPermission = this.hasGroupPermission.bind(this)
    this.logout = this.logout.bind(this)
  }

  setUser(token) {
    if (token == null) {
      return
    }
    let data = null
    try {
      data = JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return
    }
    this.userId = data["userId"]
    this.permissions = data["domainPermissions"]
    this.groups = data["groups"]
  }

  isAuthenticated() {
    return this.userId != null
  }

  hasPermission(permission) {
    return this.permissions.includes(permission)
  }

  hasGroupPermission(permission, groupId) {
    if (!groupId) {
      let withPermission = this.groups.find(group => group["groupPermissions"].includes(permission))
      return withPermission ? true : false
    }
    let groupData = this.groups.find(group => group["groupId"] == groupId)
    if (!groupData) {
      return false
    }
    return groupData["groupPermissions"].includes(permission)
  }

  logout() {
    this.userId = null
    this.permissions = []
    this.groups = []
  }
}
