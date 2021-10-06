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

export const GET_ALL_POST = gql`
  query GetAllPost {
    antonio_post(order_by: { updated_at: desc }) {
      id
      img
      title
      updated_at
      user_owner {
        id
        username
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`;
