import React from "react";
import '../components/ArticleList.css'
import { observer } from "mobx-react";
import { articleStore } from "../store/ArticleStore.tsx";
import { Link } from "react-router-dom";

const ArticleList = observer(() => {
  return (
    <div>
      <h1>Список статей</h1>
      <Link to="/articles/new"><button className="create-article">Создать новую статью</button></Link>
      <ul>
        {articleStore.articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ArticleList;
