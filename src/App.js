import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.tsx";
import ArticleForm from "./components/ArticleForm.tsx";
import ArticleList from "./components/ArticleList.tsx";
import ArticleDetail from "./components/ArticleDetail.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/new" element={<ArticleForm />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
      <Route path="/articles/edit/:id" element={<ArticleForm />} />
    </Routes>
  );
};

export default App;
