'use strict';

var _ = require('lodash');

var actions = require('../constants').action;

var initial = {

};

function gameReducer (state, action){
  state = state || initial;
  switch(action.type){
    case actions.CREATE_SOCKET:
      return _.extend({},state,{
        socket: action.payload
      });
    default:
      return state;
  }

};

module.exports = gameReducer;
