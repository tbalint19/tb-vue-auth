# Vue auth plugin (for jwt with fixed payload schema)

### Description

Works with the following schema:
```json
{
    "sessionId": 1,
    "userId": 1,
    "domainPermissions": [
        "DoDomainStuffOne"
    ],
    "groups": [
        {
          "groupId": 1,
          "groupPermissions": [
              "DoGroupStuffOne",
              "DoGroupStuffTwo"
            ]
        },
        {
          "groupId": 2,
          "groupPermissions": [
              "DoGroupStuffOne"
          ]
        }
    ]
}
```

Use cases:

  - For a simple app, __without any roles or permissions__:
    - userId is enough in the token
    - even sessionId is needless, in case of a stateless implementation
    - __*$isAuthenticated()*__ method will do the job



  - If __only roles__ are enough (e.g. admin/user):
    - define simple permissions: _"DefaultUserPermissions"_, _"DefaultAdminPermissions"_
    - __*$hasPermission('DefaultAdminPermissions')*__ can add extra complexity



  - In case __roles and permissions__ are both used, roles should never be directly accessed anyway
    - use them on the server side to load the permissions
    - and again __*$hasPermission('DeleteSomething')*__ will work



  - In case of working with __roles, permissions and groups__:
    - Even if a user has different permissions for different groups
    - __*$hasGroupPermission("AdminGroup")*__ (without specifying the group)
    - or __*$hasGroupPermission("AdminGroup", 1)*__ (with the groupId) can handle auth


### Usage

Install in your VueJS project:

```bash
npm i -s tb-vue-auth
```

Import and install in __main.js__:

```javascript
import AuthPlugin from 'tb-vue-auth'

Vue.use(AuthPlugin)
```


<hr>



And you are good to go!<br>


Examples:

  - In a template:

```html
<template>
  <div v-for="user in users">
    <span>{{ user.name }}</span>
    <span>{{ user.age }}</span>
    <button @click="loadMoreData(user.id)">Info</button>
    <button @click="deleteUser(user.id)" v-if="$hasPermission('DeleteUser')">Delete</button>
  </div>
</template>
```

  - In code:

```javascript
methods: {
  getAllTodos: function() {
    let path = this.$hasPermission('ViewAllTodos') ? "/api/todos/all" : '/api/todos/my'
    new HttpClient().get(path)
      .then( /* handle response */ )
      .catch( /* handle error */ )
  }
}
```

  - or

```javascript
created() {
  if (!this.$isAuthenticated) {
    /* navigate to login page */
  }
}
```

Set the user after login:
```javascript
methods: {
  loginProcess: function(username, password) {
    this.loginProcess({ username, password })
      .then((response) => {
        if (response.token) {
          // Plugin method! use to update the user with the raw token
          this.$setUser(token)
          // Navigate or reload - user is not (yet...) reactive - future dev my come
        } else {
          /* alert somehow */
        }
      })
      .catch(/* handle server error or something */)
  }
}
```

And the same rules apply for logout:
```javascript
// should be called after logout
// reload or full navigation is required
this.$deleteUser()
```
