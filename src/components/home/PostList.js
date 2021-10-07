import { useQuery } from "@apollo/client";
import { GET_ALL_POST } from "../../graphql/query";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import PostItems from "./PostItems";

const PostLists = () => {
  const { data, loading } = useQuery(GET_ALL_POST);
  console.log(loading);
  console.log(data);

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <>
      {data.antonio_post.map((post) => (
        <PostItems
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
          // commentsList={post.comments.comments}
          // commentsOwner={post.comments.user.username}
        />
      ))}
    </>
  );
};
export default PostLists;
