import { useSubscription } from "@apollo/client";
import { SubscriptionPost } from "../graphql/subscribe";
import { GET_POST_BY_ID } from "../graphql/subscribe";
import { GET_ALL_POST } from "../graphql/query";

export default function useSubscribePost() {
  const { data, loading, error } = useSubscription(GET_ALL_POST, {});
  return { data, loading, error };
}
