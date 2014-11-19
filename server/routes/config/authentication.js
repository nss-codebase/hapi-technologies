'use strict';

module.exports = {
  password: 'ren and stimpy',
  cookie: 'hapi-cookie',
  isSecure: false,
  validateFunc: function(session, cb){
    console.log('im in the validation function');
    return cb();
  }
};
