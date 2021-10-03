import "./posting.css";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as Comments } from "../icons/comments.svg";
import ListItem from "./ListItem";
function Posting() {
  return (
    <>
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c20ee4126826607.6135de49dc5f0.png" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6beda0127945275.614c25e697710.jpg" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f50f53116761471.60688d2009d13.jpg" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0be539113081159.6035cd1aba05b.png" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/22a7ad113081159.6035ce4872c8f.png" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
      <div className="outer-container">
        <div className="img-posting">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec1ad574071533.612e510ddbce1.jpg" />
        </div>
        <div className="desc-posting">
          <h3>Long Way to Bed Room </h3>
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
export default Posting;
