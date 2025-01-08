import { useSelector } from "react-redux";
import styles from "../../styles/Result Styling/Score.module.css";

function Score({ mode }) {
  const { score, questionNumber, quizName } = useSelector((store) => store);
  const backgroundColor = () => {
    switch (quizName.toLowerCase()) {
      case "html":
        return "#FFF1E9";
      case "css":
        return "#E0FDEF";
      case "javascript":
        return "#EBF0FF";
      case "accessibility":
        return "#F6E7FF";
    }
  };
  return (
    <div
      className={`${styles.scoreContainer} ${
        mode === true ? styles.scoreContainerLight : styles.scoreContainerDark
      }`}
    >
      <div className={styles.header}>
        <div
          className={styles.imgContainer}
          style={{ backgroundColor: backgroundColor() }}
        >
          <img
            src={`/images/icon-${quizName.toLowerCase()}.svg`}
            alt={quizName}
            className={styles.imgResult}
          />
        </div>
        <div
          className={`${styles.quizName} ${
            mode === true ? styles.quizNameLight : styles.quizNameDark
          }`}
        >
          {quizName}
        </div>
      </div>
      <div className={styles.finalResult}>
        <div
          className={`${styles.finalResultNumber} ${
            mode === true
              ? styles.finalResultNumberLight
              : styles.finalResultNumberDark
          }`}
        >
          {score}
        </div>
        <div
          className={`${styles.outOfText} ${
            mode === true ? styles.outOfTextLight : styles.outOfTextDark
          }`}
        >
          out of {questionNumber + 1}
        </div>
      </div>
    </div>
  );
}

export default Score;
