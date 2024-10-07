import { makeAutoObservable } from "mobx";

class Article {
  id: number;
  title: string;
  content: string;
  likes: number;
  tags: string[];

  constructor(title: string, content: string, tags: string[]) {
    this.title = title;
    this.content = content;
    this.likes = 0;
    this.tags = tags; 
    this.id = Math.random();    
  }

  like() {
    this.likes++;
  }
}

class ArticleStore {
  articles: Article[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addArticle(title: string, content: string, tags: string[]) {
    const newArticle = new Article(title, content, tags);
    this.articles.push(newArticle);
  }

  editArticle(id: number, title: string, content: string, tags: string[]) {
    const article = this.articles.find((a) => a.id === id);
    if (article) {
      article.title = title;
      article.content = content;
      article.tags = tags;
    }
  }
}

export const articleStore = new ArticleStore();
