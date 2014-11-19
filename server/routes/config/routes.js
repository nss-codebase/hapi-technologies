'use strict';

module.exports = [
  {method: 'post', path: '/register', config: require('../definitions/users/post_register')},
  {method: 'post', path: '/login',    config: require('../definitions/users/post_login')},
  {method: 'get',  path: '/demo',     config: require('../definitions/users/demo')}
];
