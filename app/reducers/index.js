'use strict';
var combineReducers = require('redux').combineReducers;


var reducers = {
  game: require('./gameReducers.js'),

  view: require('./viewReducers.js'),

}

module.exports = combineReducers(reducers);
