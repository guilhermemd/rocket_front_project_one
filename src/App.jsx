import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/54322854?v=4",
      name: "Rafaela B.",
      role: "Instrutora @Alura",
    },

    content: {
      paragraph:
        "Oiii eu sou a Rafaella Ballerini, criadora de conteúdo de programação e tecnologia!",
      link: "https://github.com/rafaballerini",
    },
    publishedAt: new Date("2023-03-31 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },

    content: {
      paragraph:
        "Enthusiast of the best web & mobile development technologies.Passionate about education and changing people's lives through programming. More than 200,000 people have already undergone one of my trainings.",
      link: "https://github.com/diego3g",
    },

    publishedAt: new Date("2022-04-01 24:00:00"),
  },
];
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
