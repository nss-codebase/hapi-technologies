'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register a User',
  tags:['users'],
  validate: {
    payload: {
      username: Joi.string().min(3).max(12).required(),
      password: Joi.string().min(3).required()
    }
  },
  handler: function(request, reply){
    var user = new User(request.payload);
    user.encrypt();
    user.save(function(err){
      reply({err:err});
    });
  }
};
