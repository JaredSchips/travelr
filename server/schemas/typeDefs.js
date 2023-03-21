const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
    _id: ID
    name: String
  }

  type City {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    createdAt: String
    bucketList: [City]
    favoritesList: [City]
    visitedCities: [City]
  }

  type Comment {
    _id: ID
    user: User
    message: String
  }

  type Chat {
    _id: ID
    city: City
    comments: Comment
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllUsers: [User]
    me: User
  }

  type Mutation {
    createUser(
      firstName: String!,
      lastName: String!,
      username: String!,
      email: String!,
      password: String!
      ): User
    
    login(
      email: String!,
      password: String!
      ): Auth

    updateUser(
      firstName: String,
      lastName: String,
      username: String,
      email: String,
      password: String
    ): User

    addToBucketList(
      city: String!
    ): City

    deleteFromBucketList(
      city: String!
    ): City

    addToFavorites(
      city: String!
    ): City

    deleteFromFavorites(
      city: String!
    ): City

    addToVisitedCities(
      city: String!
    ): City

    createComment(
      city: String!,
      message: String!
    ): Comment

    updateComment(
      city: String!,
      id: ID!,
      newMessage: String!
    ): Comment

    deleteComment(
      city: String!,
      id: ID!
    ): Comment
  }
`;

module.exports = typeDefs;
