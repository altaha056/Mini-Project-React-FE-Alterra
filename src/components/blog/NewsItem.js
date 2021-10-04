import React from "react";
import "./blog.css";

const NewsItem = ({
  title,
  description,
  urlToImage,
  publishedAt,
  author,
  url,
}) => {
  return (
    <div className="blog-container">
      <a href={url} className="blog-image" target="_blank">
        <img src={urlToImage} />
      </a>
      <div className="blog-desc">
        <div className="blog-sub-title">{title}</div>
        <div className="blog-sub-author">{description}</div>
        <div className="blog-sub-release">
          Author: {author}
          <br />
          {publishedAt}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
