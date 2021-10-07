import { useMutation } from "@apollo/client";
import { DeletePost } from "../graphql/mutation";
import { GET_POST_BY_PROFILE } from "../graphql/subscribe";

import React from "react";

export const useGetDeletePost = () => {
  const [deletePost, { loading: loadingDelete }] = useMutation(DeletePost, {
    refetchQueries: [GET_POST_BY_PROFILE],
  });

  return { deletePost, loadingDelete };
};
