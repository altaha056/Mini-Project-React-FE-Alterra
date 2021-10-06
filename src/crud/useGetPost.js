import { useQuery } from "@apollo/client";
import { getPost } from "../graphql/query";
import { SubscriptionPost } from "../graphql/subscribe";
import { GET_POST_BY_ID } from "../graphql/subscribe";
import { GET_ALL_POST } from "../graphql/query";

export default function useGetPost() {
  const { data, loading, error, subscribeToMore } = useQuery(getPost);

  const subscribePost = () => {
    subscribeToMore({
      document: GET_ALL_POST,
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
