import { gql } from "graphql-tag";

export const SubscriptionPost = gql`
  subscription MySubscription {
    antonio_post {
      id
      img
      owner_id
      title
    }
  }
`;
