import { gql } from "graphql-tag";

export const SubscriptionPost = gql`
  subscription MySubscription {
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
