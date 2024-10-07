import React from "react";
import { observer } from "mobx-react";
import { articleStore } from "../store/ArticleStore.tsx";
import { Link } from "react-router-dom";

const ArticleList = observer(() => {
  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articleStore.articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/articles/new">Создать новую статью</Link>
    </div>
  );
});

export default ArticleList;
