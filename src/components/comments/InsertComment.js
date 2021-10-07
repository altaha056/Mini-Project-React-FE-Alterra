import React from "react";
import { AddComment } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";

import "../home/posting.css";

export const InsertComment = ({ post_id }) => {
  console.log(post_id);
  const user_id = localStorage.getItem("user_id");

  const commentEl = useRef();
  const [
    insertComment,
    {
      data: dataAddComment,
      error: errorAddComment,
      loading: loadingAddComment,
    },
  ] = useMutation(AddComment);

  const history = useHistory();

  const addCommentHandler = (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const comment = commentEl.current.value;
    if (user_id === null) {
      history.push("/login");
      return;
    }
    if (comment !== "") {
      const object = {
        user_id,
        comment,
        comment_post_id: post_id,
      };
      console.log(object);
      insertComment({
        variables: {
          object,
        },
      });
      commentEl.current.value = "";
    }
  };

  return (
    <>
      <form className="form-add-comment" onSubmit={addCommentHandler}>
        <input
          className="add-comment-input"
          type="text"
          placeholder="Add comment"
          ref={commentEl}
        />
        <button
          type="submit"
          name="add-comment"
          value="komentar"
          className="add-comment-button"
        >
          Enter
        </button>
      </form>
    </>
  );
};
