import "./posting.css";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";

const ListItem = (props) => {
  const {
    img,
    user_owner: { username },
    title,
    like_count,
    comments: { comment },
  } = props.data;

  return (
    <>
      <div className="outer-container">
        <div className="img-posting">
          <img src={img} alt="picture by user" />
        </div>
        <div className="desc-posting">
          <h3>{title} </h3>
          <p>
            by: <span>{username}</span>
          </p>
          <div className="detailed-container">
            <div className="detailed-group">
              <Heart className="icon" />
              <p>{like_count}</p>
              <Comments className="icon comment" />
              <p>34</p>
            </div>

            <div className="timestamp">
              <p>1 hour ago</p>
            </div>
          </div>

          <div className="box-comments">
            <p>{comment}</p>
          </div>

          <form className="form-add-comment">
            <input
              className="add-comment-input"
              type="text"
              placeholder="Add comment"
            />
            <button
              type="button"
              name="add-comment"
              value="komentar"
              className="add-comment-button"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListItem;
