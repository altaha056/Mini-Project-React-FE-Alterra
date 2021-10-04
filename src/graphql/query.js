import { gql } from "@apollo/client";

export const getPost = gql`
  query MyQuery {
    antonio_post {
      img
      title
      like_count
      user_owner {
        username
      }
      comments {
        comment
      }
    }
  }
`;
