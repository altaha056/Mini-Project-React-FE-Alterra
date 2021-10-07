import { useEffect } from "react";
import useGetPost from "../../crud/useGetPost";
import ListItem from "./ListItem";
import Posting from "./posting";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";

const ListPost = () => {
  const { antonio_post, loading, error, subscribePost } = useGetPost();

  useEffect(() => {
    subscribePost();
  });

  if (error) {
    return <h2>error occured</h2>;
  }
  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <>
      {antonio_post.map((item) => (
        <ListItem key={item.id} id={item.id} data={item} />
      ))}
    </>
  );
};

export default ListPost;
