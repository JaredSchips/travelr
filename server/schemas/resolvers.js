const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
	Query: {
		getAllUsers: async (_parent, args, context) => {

      try {
        console.log(args, context)
      } catch (err) {
        throw new Error('GetAllUsers Error', err)
      }
    },
	},
	Mutation: {
		createUser: async (_parent, args, context) => {
      try {
			console.log(args, context);
		} catch (err) {
			throw new Error('GetAllUsers Error', err);
		}
    },
	},
};

module.exports = resolvers;
