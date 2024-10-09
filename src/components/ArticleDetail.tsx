import React, { useState, useEffect } from "react";
import '../components/ArticleDetail.css'; 
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

  const handleBack = () => {
    navigate(-1); 
  };

  if (!article) return <div className="container">Article not found</div>;

  return (
    <>
    <div className="container">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p className="likes">Likes: {likes}</p>
      <button onClick={handleLike} className="btn-like">Like</button>
      <button onClick={handleEdit}>Edit Article</button>
    </div>
      <button onClick={handleBack} className="btn-back">Назад</button>
      </>
  );
};

export default ArticleDetail;
