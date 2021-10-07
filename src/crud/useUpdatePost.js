import { useMutation } from "@apollo/client";
import { GET_POST_BY_PROFILE } from "../graphql/subscribe";
import { UpdatePost } from "../graphql/mutation";

export default function useUpdatePost() {
  const [updateUser, { loading: loadingUpdate }] = useMutation(UpdatePost, {
    refetchQueries: [GET_POST_BY_PROFILE],
  });
  return {
    updateUser,
    loadingUpdate,
  };
}
