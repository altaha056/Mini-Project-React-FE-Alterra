import { useEffect } from "react";
import useGetPost from "../../crud/useGetPost";
import ListItem from "./ListItem";

const ListPost = () => {
  const { antonio_post, loading, error, subscribePost } = useGetPost();

  useEffect(() => {
    subscribePost();
  });

  if (error) {
    return <h3>error occured</h3>;
  }
  if (loading) {
    return <h3>load data</h3>;
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
