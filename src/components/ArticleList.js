import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const Articles = posts.map((post) => {
    return <Article key={post.id} {...post} />;
  });

  return <main>{Articles}</main>;
}

export default ArticleList;
