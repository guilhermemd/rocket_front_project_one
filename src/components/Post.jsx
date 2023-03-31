import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  const { author, content, publishedAt } = props;
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedbackText, setNewFeedbackText] = useState("");

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

  function handleCreateNewComment(event) {
    event.preventDefault();
    setFeedbacks([...feedbacks, newFeedbackText]);
    setNewFeedbackText("");
  }

  function handleNewFeedbackChange() {
    setNewFeedbackText(event.target.value);
  }

  function handleDeleteFeedback(feedback) {
    const feedbackWithNoDeletedOne = feedbacks.filter(
      (item) => item !== feedback
    );
    setFeedbacks(feedbackWithNoDeletedOne);
  }
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

      <form
        onSubmit={(event) => handleCreateNewComment(event)}
        className={styles.commentForm}
      >
        <strong>Leave a feedback</strong>
        <textarea
          name="feedback"
          placeholder="Post a feedback"
          value={newFeedbackText}
          onChange={(event) => handleNewFeedbackChange(event)}
        />
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {feedbacks.map((feedback, index) => (
          <Comment
            key={index}
            feedback={feedback}
            handleDeleteFeedback={handleDeleteFeedback}
          />
        ))}
      </div>
    </article>
  );
}
