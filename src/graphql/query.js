import {gql} from "@apollo/client";

export const getPost = gql`
  query MyQuery {
    antonio_post {
      img
      title
      user_owner {
        username
      }
    }
  }
`;