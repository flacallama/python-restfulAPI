/**
 * Dogs.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idNum: {
      type: 'integer',
      autoIncrement: true
    },
    username: {
      type: 'string',
      unique: true,
      required: true,
      size: 30
    },
    years: {
      type: 'integer'
    },
    friends: {
      type: 'array'
    }
  },
};
