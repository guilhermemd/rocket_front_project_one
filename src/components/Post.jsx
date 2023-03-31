import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  const { author, content, publishedAt } = props;

  /****************************/
  /*******BRAZILIAN DATE*******/
  /****************************/
  // const publishedDateFormatted = format(
  //   publishedAt,
  //   "d 'de' LLLL 'às' HH:mm'h'",
  //   {
  //     locale: ptBR,
  //   }
  // );

  const publishedDateFormatted = format(
    publishedAt,
    " LLLL dd, yyyy 'at' h:mm a "
  );

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    // locale: ptBR,
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publisedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>{content.paragraph}</p>

        <p>
          <a target="_blank" rel="noopener noreferrer" href={content.link}>
            #MyWebsite{" "}
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
