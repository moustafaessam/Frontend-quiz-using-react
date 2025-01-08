import { useSelector } from "react-redux";
import styles from "../../styles/Quiz Styling/Question.module.css";

function Question({ mode }) {
  const { questionNumber, question } = useSelector((store) => store);
  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}>
        <div
          className={`${styles.questionNumber} ${
            mode === true
              ? styles.questionNumberLight
              : styles.questionNumberDark
          }`}
        >
          Question {questionNumber + 1} out of 10
        </div>
        <div
          className={`${styles.questionName} ${
            mode === true ? styles.questionNameLight : styles.questionNameDark
          }`}
        >
          {question}
        </div>
      </div>
      <div
        className={`${styles.questionsRange} ${
          mode === true ? styles.questionsRangeLight : styles.questionsRangeDark
        }`}
      >
        <div
          className={styles.range}
          style={{ width: `${(questionNumber + 1) * 10}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Question;
