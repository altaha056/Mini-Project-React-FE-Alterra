import "./profile.css";
import useInsertPost from "../../crud/useInsertPost";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { parse, responsePathAsArray } from "graphql";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USERNAME } from "../../graphql/query";

function PostInput() {
  const { insertPost, loadingInsert } = useInsertPost();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("tes");
  const [like_count, setLikeCount] = useState(0);
  const [owner_id, setOwnerId] = useState();
  const [editing, setEditing] = useState(true);
  const history = useHistory();
  const onChangeTitle = (e) => {
    if (e.target) {
      setTitle(e.target.value);
    }
  };

  const onChangeImage = useCallback((event) => {
    var file = event.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
    reader.readAsDataURL(file);
  }, []);

  const user_id = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");

  const addPost = (e) => {
    insertPost({
      variables: {
        object: {
          title: title,
          img: img,
          user_id: user_id,
          like_count: like_count,
        },
      },
    });
  };

  const handleSubmit = (e) => {
    if (title.trim()) {
      const newData = {
        title: title,
        img: img,
        user_id: user_id,
        like_count: like_count,
      };

      addPost(newData);
    } else {
      alert("error occured");
    }
  };

  if (loadingInsert) {
    return <h3 className="loadingListPassenger">Sedang menambahkan</h3>;
  }

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

  const onSignOutHandler = () => {
    localStorage.removeItem("user_id");
  };
  return (
    <>
      {user_id !== null && (
        <div className="header-user-container">
          <div className="header-identity-container">
            <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/quby-pentol/tray_large.png?4776c1769a678e6d5e003530cf28e31c" />
            <div className="username">
              <p className="name">{username}</p>
              <Link to="/" onClick={onSignOutHandler}>
                <p className="logout">Logout</p>
              </Link>
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
                  {/* <button
                    type="file"
                    name={img}
                    value="komentar"
                    className="add-comment-button"
                    onChange={onChangeImage}
                  >
                    Choose Image
                  </button> */}

                  <input
                    className="add-post-input"
                    type="file"
                    placeholder="Add image"
                    name={img}
                    accept="image/*"
                    onChange={onChangeImage}
                  />
                  <input
                    className="add-post-input"
                    type="text"
                    placeholder="Add title"
                    maxLength="22"
                    name={title}
                    onChange={onChangeTitle}
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
                    onClick={handleSubmit}
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default PostInput;
