import React from "react";

import Axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e2c33fa4d8af42bf8273a226d28060e6"
      );

      setArticles(res.data.articles);

      console.log(res);
    };

    getArticles();
  });

  return (
    <>
      {articles.map(
        ({ title, description, urlToImage, publishedAt, author, url }) => (
          <NewsItem
            title={title}
            description={description}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
            author={author}
            url={url}
          />
        )
      )}
    </>
  );
};

export default NewsList;
