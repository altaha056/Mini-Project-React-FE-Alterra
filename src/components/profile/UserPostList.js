import { useHistory } from "react-router";
import { GET_POST_BY_PROFILE } from "../../graphql/subscribe";
import { useSubscription } from "@apollo/client";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import { UserPostItem } from "./UserPostItem";
import useUpdatePost from "../../crud/useUpdatePost";
import { useGetDeletePost } from "../../crud/useGetDeletePost";

function UserPostList() {
  const history = useHistory();
  const user_id = localStorage.getItem("user_id");

  const { data, loading } = useSubscription(GET_POST_BY_PROFILE, {
    variables: { user_id },
  });

  const { deletePost, loadingDelete } = useGetDeletePost();
  const { updatePost, loadingUpdate } = useUpdatePost();

  const editPost = async (idx) => {
    const item = data.antonio_post.find((v) => v.id === idx);
    const changeTitle = prompt("enter title", item.title);
    if (changeTitle) {
      updatePost({
        variables: {
          id: idx,
          title: changeTitle,
        },
      });
    }
  };

  const getDeletePost = (qq) => {
    deletePost({
      variables: {
        id: qq,
      },
    });
  };

  if (loadingDelete) {
    return <LoadingAnimation />;
  }

  console.log(data);
  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      {data.antonio_post.map((post) => (
        <UserPostItem
          key={post.id}
          post_id={post.id}
          image={post.img}
          title={post.title}
          updated_at={post.updated_at}
          user_id={post.user_owner.id}
          user_username={post.user_owner.username}
          totalLikes={post.likes_aggregate.aggregate.count}
          totalComments={post.comments_aggregate.aggregate.count}
          comments={post.comments}
          getDeletePost={() => getDeletePost(post.id)}
          updatePost={() => editPost(post.id)}
        />
      ))}
    </>
  );
}
export default UserPostList;
