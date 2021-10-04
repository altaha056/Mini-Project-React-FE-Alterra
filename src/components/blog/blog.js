import "./blog.css";
import NewsList from "./NewsList";

function Blog() {
  return (
    <>
      <div className="blog-title">
        <h1>Blog</h1>
      </div>

      <div className="container-blog">
        <NewsList />
      </div>
    </>
  );
}
export default Blog;
