import {gql} from "@apollo/client";

export const getPost = gql`
  query MyQuery {
    antonio_post {
      id
      img
      owner_id
      title
    }
  }
`;