import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!,
    $email: String!,
    $password: String!
    ) {
    createUser(
      username: $username,
      email: $email,
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login(
    $email: String!,
    $password: String!
    ) {
    login(
      email: $email,
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_FAVORITE = gql`
  mutation AddToFavorites(
    $city: String!,
    $country: String!
    ) {
    addToFavorites(
      city: $city,
      country: $country
      ) {
      _id
      name
      country
    }
  }
`

export const DELETE_FAVORITE = gql`
  mutation DeleteFromFavorites(
    $city: String!
    ) {
    deleteFromFavorites(
      city: $city
      ) {
      _id
      name
      country
    }
  }
`

export const ADD_VISITED = gql`
  mutation AddToVisitedCities($city: String!, $country: String!) {
    addToVisitedCities(
      city: $city,
      country: $country
      ) {
      _id
      name
      country
    }
  }
`

export const ADD_BUCKET_LIST_ITEM = gql`
  mutation AddToBucketList(
    $city: String!,
    $country: String!
    ) {
    addToBucketList(
      city: $city,
      country: $country
      ) {
      _id
      name
      country
    }
  }
`

export const DELETE_BUCKET_LIST_ITEM = gql`
  mutation DeleteFromBucketList(
    $city: String!
    ) {
    deleteFromBucketList(
      city: $city
      ) {
      _id
      name
      country
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $city: String!,
    $message: String!
    ) {
    createComment(
      city: $city,
      message: $message
      ) {
      _id
      user {
        _id
        username
      }
      message
    }
  }
`