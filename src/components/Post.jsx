import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/74270263?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme.md</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="28 de março 11:50:00" dateTime="2023-03-29 11:50:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>I'm a skilled web developer with expertise in: </p>
        <p>
          React, GraphQL, PWA-Studio, Magento 2, CSS, MongoDB, Node Express and
          Postman.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/guilhermemd"
          >
            #Github{" "}
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitconnected.com/guilhermemd/resume"
          >
            #CV{" "}
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a feedback</strong>
        <textarea placeholder="Post a feedback" />
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
