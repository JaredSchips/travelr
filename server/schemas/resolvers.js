const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
	Query: {
		getAllUsers: async (_parent, _args, context) => {
      try {
				console.log(context.user)
        return await User.find()
      } catch (err) {
        console.log(err)
				return err
      }
    },
	},
	Mutation: {
		createUser: async (_parent, args) => {
      try {
        return await User.create(args)
      } catch (err) {
        console.log(err)
				return err
      }
    },
		
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
	},
};

module.exports = resolvers;
