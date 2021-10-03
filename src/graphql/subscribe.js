import { gql } from "graphql-tag";

export const SubscriptionPost = gql`
  subscription MySubscription {
    antonio_post {
      img
      title
      user_owner {
        username
      }
    }
  }
`;
