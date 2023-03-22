import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      username
      email
      password
      createdAt
      bucketList {
        _id
        name
      }
      favoritesList {
        _id
        name
      }
      visitedCities {
        _id
        name
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetAllComments(
    $city: String!
    ) {
    getAllComments(
      city: $city
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