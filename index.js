!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tb-vue-auth",[],t):"object"==typeof exports?exports["tb-vue-auth"]=t():e["tb-vue-auth"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userId=null,this.permissions=[],this.groups=[],this.setUser=this.setUser.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.hasPermission=this.hasPermission.bind(this),this.hasGroupPermission=this.hasGroupPermission.bind(this),this.logout=this.logout.bind(this)}var t,n,i;return t=e,(n=[{key:"setUser",value:function(e){if(null!=e){var t=null;try{t=JSON.parse(atob(e.split(".")[1]))}catch(e){return}this.userId=t.userId,this.permissions=t.domainPermissions,this.groups=t.groups}}},{key:"isAuthenticated",value:function(){return null!=this.userId}},{key:"hasPermission",value:function(e){return this.permissions.includes(e)}},{key:"hasGroupPermission",value:function(e,t){if(!t)return!!this.groups.find(function(t){return t.groupPermissions.includes(e)});var n=this.groups.find(function(e){return e.groupId==t});return!!n&&n.groupPermissions.includes(e)}},{key:"logout",value:function(){this.userId=null,this.permissions=[],this.groups=[]}}])&&r(t.prototype,n),i&&r(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"default",function(){return o});var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"install",value:function(t,n){t.prototype.$setUser=e.user.setUser,t.prototype.$isAuthenticated=e.user.isAuthenticated,t.prototype.$hasPermission=e.user.hasPermission,t.prototype.$hasGroupPermission=e.user.hasGroupPermission,t.prototype.$deleteUser=e.user.logout}}],(n=null)&&s(t.prototype,n),r&&s(t,r),e}();o.user=new i}])});