import { useSubscription } from "@apollo/client";
import { SubscriptionPost } from "../graphql/subscribe";

export default function useSubscribePost() {
  const { data, loading, error } = useSubscription(SubscriptionPost, {});
  return { data, loading, error };
}
