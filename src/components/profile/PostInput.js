import "./profile.css";
import useInsertPost from "../../crud/useInsertPost";
import { useState } from "react";

function PostInput() {
  const { insertPost, loadingInsert } = useInsertPost();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("tes");
  const [like_count, setLikeCount] = useState(0);
  const [owner_id, setOwnerId] = useState(4);
  const [editing, setEditing] = useState(true);

  const onChangeTitle = (e) => {
    if (e.target) {
      setTitle(e.target.value);
    }
  };

  const addPost = (e) => {
    insertPost({
      variables: {
        object: {
          title: title,
          img: img,
          owner_id: owner_id,
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
        owner_id: owner_id,
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
    </>
  );
}
export default PostInput;
