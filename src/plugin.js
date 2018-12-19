import User from './user'
import Vue from 'vue'

export default class AuthPlugin {
  static user = new User()

  static install(Vue, config) {
    Vue.prototype.$setUser = AuthPlugin.user.setUser
    Vue.prototype.$isAuthenticated = AuthPlugin.user.isAuthenticated
    Vue.prototype.$hasPermission = AuthPlugin.user.hasPermission
    Vue.prototype.$hasGroupPermission = AuthPlugin.user.hasGroupPermission
    Vue.prototype.$deleteUser = AuthPlugin.user.logout
  }
}
