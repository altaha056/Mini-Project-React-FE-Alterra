import { useSubscription } from "@apollo/client";
import { useParams } from "react-router";
import { GET_COMMENTS_BY_POST_ID } from "../../graphql/subscribe";

import React from "react";
import { CommentsItems } from "./CommentsItems";

export const Comment = () => {
  const { comment_post_id } = useParams();
  const { data } = useSubscription(GET_COMMENTS_BY_POST_ID, {
    variables: { comment_post_id },
  });

  console.log(data);

  return (
    <>
      {data?.antonio_comment.map((comment) => (
        <CommentsItems
          key={comment.id}
          username={comment.user.username}
          comment={comment.comment}
        />
      ))}
    </>
  );
};
