// src/components/ArticleDetail.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articleStore } from "../store/ArticleStore.tsx";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articleStore.articles.find((article) => article.id === Number(id));
  
  const [likes, setLikes] = useState(article ? article.likes : 0);

  useEffect(() => {
    if (article) {
      setLikes(article.likes); 
    }
  }, [article]);

  const handleLike = () => {
    if (article) {
      article.like();
      setLikes(article.likes);
    }
  };

  const handleEdit = () => {
    navigate(`/articles/edit/${article?.id}`);
  };

  if (!article) return <div>Article not found</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleEdit}>Edit Article</button>
    </div>
  );
};

export default ArticleDetail;
