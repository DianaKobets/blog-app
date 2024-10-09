import React, { useState } from "react";
import "../components/ArticleForm.css"
import { articleStore } from "../store/ArticleStore.tsx";
import { useNavigate, useParams } from "react-router-dom";

const ArticleForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = id ? articleStore.articles.find(a => a.id === Number(id)) : null;

  const [title, setTitle] = useState(article ? article.title : "");
  const [content, setContent] = useState(article ? article.content : "");
  const [tags, setTags] = useState(article ? article.tags.join(", ") : "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = tags.split(",").map(tag => tag.trim());

    if (article) {
      articleStore.editArticle(article.id, title, content, tagsArray);
    } else {
      articleStore.addArticle(title, content, tagsArray);
    }

    navigate("/articles");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tags (через запятую)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">{article ? "Редактировать" : "Создать"}</button>
    </form>
  );
};

export default ArticleForm;
