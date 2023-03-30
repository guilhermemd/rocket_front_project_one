import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/74270263?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme.md</strong>
              <time title="march 29th 11:50:00" dateTime="2023-03-29 11:50:00">
                Published 1 hour ago
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Nice one. Congratulations!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
