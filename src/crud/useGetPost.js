import { useQuery } from "@apollo/client";
import { getPost } from "../graphql/query";
import { SubscriptionPost } from "../graphql/subscribe";

export default function useGetPost() {
  const { data, loading, error, subscribeToMore } = useQuery(getPost);

  const subscribePost = () => {
    subscribeToMore({
      document: SubscriptionPost,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        console.log(data);
        return data;
      },
    });
  };
  return {
    antonio_post: data ? data.antonio_post : [],
    loading,
    error,
    subscribePost,
  };
}
