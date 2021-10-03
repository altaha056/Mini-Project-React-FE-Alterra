import "./profile.css";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";
import { ReactComponent as Delete } from "../icons/delete.svg";
import { useEffect } from "react";
import { useState } from "react";

function Profile() {
  const [editing, setEditing] = useState(true);

  const handleBukaInput = () => {
    setEditing(false);
  };
  const handleTutupInput = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <>
      <div className="header-user-container">
        <div className="header-identity-container">
          <img src="https://i.pinimg.com/564x/a6/38/a8/a638a83fadf0a53368153fdccb7e23cf.jpg" />
          <div className="username">
            <p className="name">Altaha</p>
            <p className="logout">Logout</p>
          </div>
        </div>
        <div className="header-post-container">
          <div className="post">
            <button onClick={handleBukaInput} style={editMode}>
              Post+
            </button>
          </div>
          <div style={viewMode}>
            <div className="choose-img">
              <form className="form-add-post">
                <button
                  type="button"
                  name="add-post-title"
                  value="komentar"
                  className="add-comment-button"
                >
                  Choose Image
                </button>
                <input
                  className="add-post-input"
                  type="text"
                  placeholder="Add title"
                  maxLength="22"
                />
                <br />
                <button
                  type="button"
                  name="add-post-title"
                  value="komentar"
                  className="cancel-post"
                  onClick={handleTutupInput}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  name="add-post-title"
                  value="komentar"
                  className="add-post-button"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c620e987585713.5dbc6ee3de0c0.png" />
        </div>

        <div className="desc-posting">
          <h3>Together with Lovely One</h3>
          <div className="detailed-container">
            <div className="detailed-group">
              <Heart className="icon" />
              <p>34</p>
              <Comments className="icon space" />
              <p>34</p>
              <Delete className="icon space" />
            </div>
            <p className="edit">edit</p>

            <div className="timestamp">
              <p>1 hour ago</p>
            </div>
          </div>

          <div className="box-comments">
            <p>
              <span>Andres Iniesta</span>Wow Amazing
            </p>
            <p>
              <span>Charles Xavi</span>Keep it up brother
            </p>
            <p>
              <span>Alghazali</span>Sejauh mata memandang
            </p>
            <p>
              <span>Lionel Messi</span>Pada suatu hari
            </p>
            <p>
              <span>Cristiano Ronaldo</span>hiduplah seorang
            </p>
            <p>
              <span>Chicharito Hernandez</span>anak mama
            </p>
            <p>
              <span>Antonio Griezman</span>Emot api api api
            </p>
            <p>
              <span>La Cazette</span>Menyala Kakak e e e e
            </p>
            <p>
              <span>Aubameyang</span>Yang punya satu london ini mantap kakak e
            </p>
            <p>
              <span>Minimano</span>Tetap ilmu padi kakak
            </p>
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
}
export default Profile;
