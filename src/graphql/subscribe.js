import { gql } from "graphql-tag";

export const SubscriptionPost = gql`
  subscription MySubscription {
    antonio_post {
      id
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

export const GET_POST_BY_PROFILE = gql`
  subscription GetAllPost($user_id: Int!) {
    antonio_post(
      order_by: { updated_at: desc }
      where: { user_id: { _eq: $user_id } }
    ) {
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
      comments {
        user {
          username
        }
        comment
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  subscription MySubscription {
    antonio_post(order_by: { updated_at: desc }) {
      id
      img
      title
      user_owner {
        id
        username
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
  }
`;

export const CHECK_LIKES = gql`
  subscription checkLikes($user_id: Int!, $post_id: Int!) {
    antonio_likes_aggregate(
      where: { post_id: { _eq: $post_id }, user_id: { _eq: $user_id } }
    ) {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const GET_COMMENTS_BY_POST_ID = gql`
  subscription getCommentsByPostId($comment_post_id: Int!) {
    antonio_comment(
      where: { comment_post_id: { _eq: $comment_post_id } }
      order_by: { updated_at: desc }
    ) {
      id
      comment
      updated_at
      user {
        id
        username
      }
    }
  }
`;

export const TOTAL_LIKES = gql`
  subscription MySubscription($post_id: Int!) {
    antonio_likes_aggregate(where: { post_id: { _eq: $post_id } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`;
