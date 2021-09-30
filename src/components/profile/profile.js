import "./profile.css";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";
function Profile() {
  return (
    <>
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c620e987585713.5dbc6ee3de0c0.png" />
        </div>
        <div className="desc-posting">
          <h3>Together with Lovely One</h3>
          <p>
            by: <span>Fulan bin Fulana</span>
          </p>
          <div className="detailed-container">
            <div className="detailed-group">
              <Heart className="icon" />
              <p>34</p>
              <Comments className="icon comment" />
              <p>34</p>
            </div>

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
