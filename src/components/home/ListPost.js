import { useEffect } from "react";
import useGetPost from "../../crud/useGetPost";
import ListItem from "./ListItem";

const ListPost = () => {
  const { antonio_post, loading, error, subscribePost } = useGetPost();

  useEffect(() => {
    subscribePost();
  });

  if (error) {
    return <h3>Terjadi kesalahan</h3>;
  }
  if (loading) {
    return <h3>Sedang memuat</h3>;
  }
  return (
    <>
      <div>
        <table>
          {antonio_post.map((item) => (
            <ListItem key={item.id} id={item.id} data={item} />
          ))}
        </table>
      </div>
    </>
  );
};
export default ListPost;
