import styles from "./FAQAccordion.module.css";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";

export default function FAQAccordion({ question, children }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    if (showAnswer === true) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  }

  return (
    <div className={styles.card}>
      <div
        className={`${styles.questionDiv} ${showAnswer && styles.active}`}
        onClick={toggleAnswer}
      >
        <h3 className={styles.question}>{question}</h3>
        {showAnswer === true ? (
          <IoIosRemove className={styles.icon} />
        ) : (
          <IoAdd className={styles.icon} />
        )}
      </div>
      {children && showAnswer && <p className={styles.answer}>{children}</p>}
    </div>
  );
}
