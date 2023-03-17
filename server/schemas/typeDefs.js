const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
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
    visitedCountries: [Country]
    likedCountries: [Country]
    bucketList: [Country]
  }

  type Comment {
    _id: ID
    user: User
    message: String
  }

  type Chat {
    _id: ID
    country: Country
    comments: Comment
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(username: String, password: String): User
  }
`;

module.exports = typeDefs;
