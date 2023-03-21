const { AuthenticationError } = require('apollo-server-express');
const { User, Chat } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
	Query: {
		getAllUsers: async (_parent, _args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      try {
        return await User.find()
      } catch (err) {
        console.log(err)
				return err
      }
    },

    getAllComments: async(_parent, {city}, context) => {
      try {
        if (!context.user) throw new AuthenticationError('Not logged in');

        const chat = await Chat.findOne({ "city.name": city });
        return chat.comments
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    
    me: async(_parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      try {
        return await User.findById(context.user._id);
      }catch (err){
        console.log(err);
        return err
      }
    },
   
	},
  

	Mutation: {
		createUser: async (_parent, args) => {
      console.log('Working so far!')
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async(_parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      return await User.findByIdAndUpdate(context.user._id,
        args,
        { new: true });
    },

    addToBucketList: async(_parent, { city }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      console.log(city)
      
      const user = await User.findByIdAndUpdate(context.user._id,
        { $push: { bucketList: { name: city } } },
        { new: true })
      
      return user.bucketList[user.bucketList.length-1]
    },

    deleteFromBucketList: async(_parent, { city }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const user = await User.findByIdAndUpdate(context.user._id,
        { $pull: { bucketList: { name: city } } })

      return user.bucketList.filter(item => item.name === city)[0]
    },

    addToFavorites: async(_parent, { city }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const user = await User.findByIdAndUpdate(context.user._id,
        { $push: { favoritesList: { name: city } } },
        { new: true })
      
      return user.favoritesList[user.favoritesList.length-1]
    },

    deleteFromFavorites: async(_parent, { city }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const user = await User.findByIdAndUpdate(context.user._id,
        { $pull: { favoritesList: { name: city } } })
      
        return user.favoritesList.filter(item => item.name === city)[0]
    },

    addToVisitedCities: async(_parent, { city }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const user = await User.findByIdAndUpdate(context.user._id,
        { $push: { visitedCities: { name: city } } },
        { new: true })
      
      return user.visitedCities[user.visitedCities.length-1]
    },

    createComment: async(_parent, { city, message }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const chat =  await Chat.findOneAndUpdate({ "city.name": city },
        { $push: { comments: { user: context.user._id, message: message } } },
        { new: true }
        ).populate({ path: 'comments.user' })
      
      return chat.comments[chat.comments.length-1]
    },

    updateComment: async(_parent, { city, id, newMessage }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      console.log(newMessage)
      console.log((await Chat.findOne({ "city.name": city })).comments)

      const chat = await Chat.findOneAndUpdate({ "city.name": city },
        { $set: { 'comments.$[comment].message': newMessage } },
        { arrayFilters: [ { "comment._id": id } ], new: true }
      ).populate({ path: 'comments.user' })

      return chat.comments.filter(comment => comment._id.toString() === id)[0]
    },

    deleteComment: async(_parent, { city, id }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      const chat = await Chat.findOneAndUpdate({ "city.name": city },
        { $pull: { comments: { _id: id } } }
      ).populate({ path: 'comments.user' })
      
      console.log(chat.comments.filter(comment => comment._id.toString() === id))
      
      return chat.comments.filter(comment => comment._id.toString() === id)[0]
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
