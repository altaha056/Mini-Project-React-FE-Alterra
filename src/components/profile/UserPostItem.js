import "./profile.css";
import "../home/posting.css";
import React from "react";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";
import { ReactComponent as Delete } from "../icons/delete.svg";
import moment from "moment";
import { Comment, InsertComment } from "../comments/InsertComment";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import { useGetDeletePost } from "../../crud/useGetDeletePost";

export const UserPostItem = ({
  post_id,
  image,
  title,
  updated_at,
  user_id,
  user_username,
  totalLikes,
  totalComments,
  comments,
  getDeletePost,
  updatePost,
}) => {
  return (
    <div className="outer-container">
      <div className="img-posting">
        <img src={image} />
      </div>

      <div className="desc-posting">
        <h3>{title}</h3>
        <div className="detailed-container">
          <div className="detailed-group">
            <Heart className="icon" />
            <p>{totalLikes}</p>
            <Comments className="icon space" />
            <p>{totalComments}</p>
            <div onClick={getDeletePost}>
              <Delete className="icon space" />
            </div>
          </div>
          <p className="edit" onClick={updatePost}>
            edit
          </p>

          <div className="timestamp">
            <p>{moment(updated_at).format("MMM D YY, h:mm:ss a")}</p>
          </div>
        </div>

        <div className="box-comments">
          {comments.map(({ user, comment }) => (
            <p>
              <span>{user.username}</span>
              {comment}
            </p>
          ))}
        </div>
        <InsertComment post_id={post_id} />
      </div>
    </div>
  );
};
