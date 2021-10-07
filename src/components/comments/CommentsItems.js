import "../home/posting.css";
import React from "react";

export const CommentsItems = (comment, username) => {
  return (
    <div>
      <p>
        <span>{username}</span>
        {comment}
      </p>
    </div>
  );
};
