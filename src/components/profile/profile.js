import "./profile.css";
import UserPostList from "./UserPostList";
import PostInput from "./PostInput";
import { Loginfirst } from "../unknownpage/Loginfirst";

function Profile() {
  const user_id = localStorage.getItem("user_id");

  return (
    <>
      {user_id !== null ? (
        <>
          <PostInput />
          <UserPostList />
        </>
      ) : (
        <Loginfirst />
      )}
    </>
  );
}
export default Profile;
