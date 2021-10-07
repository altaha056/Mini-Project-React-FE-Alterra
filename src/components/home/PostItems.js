import "./posting.css";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";
import moment from "moment";
import { Comment, InsertComment } from "../comments/InsertComment";

const PostItems = ({
  post_id,
  image,
  title,
  updated_at,
  user_id,
  user_username,
  totalLikes,
  totalComments,
  comments,
}) => {
  return (
    <div className="outer-container">
      <div className="img-posting">
        <img src={image} alt="picture by user" />
      </div>
      <div className="desc-posting">
        <h3>{title} </h3>
        <p>
          by: <span>{user_username}</span>({moment(updated_at).fromNow()})
        </p>
        <div className="detailed-container">
          <div className="detailed-group">
            <Heart className="icon" />
            <p>{totalLikes}</p>
            <Comments className="icon comment" />
            <p>{totalComments}</p>
          </div>

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
export default PostItems;
