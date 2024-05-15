import type { Articles } from "./types.ts";

const raw = await (await fetch("https://zenn.dev/api/articles?username=akku")).json();

const articles = raw.articles.map((article) => ({
  title: article.title,
  link: `https://zenn.dev${article.path}`,
  date: new Date(article.published_at),
}));

export default articles;
