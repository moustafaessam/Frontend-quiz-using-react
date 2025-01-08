import { useSelector } from "react-redux";
import styles from "../../styles/Header Styling/QuizNameAndLogo.module.css";

// src =
// alt =
// name =

function QuizNameAndLogo({ mode }) {
  const { quizName } = useSelector((store) => store);
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
    <div className={styles.quizSelected}>
      <div
        className={styles.quizSelectedLogo}
        style={{ backgroundColor: backgroundColor() }}
      >
        <img
          className={styles.imgLogo}
          src={`/images/icon-${quizName.toLowerCase()}.svg`}
          alt={quizName}
        />
      </div>
      <div
        className={`${styles.quizSelectedName} ${
          mode === true
            ? styles.quizSelectedNameLight
            : styles.quizSelectedNameDark
        }`}
      >
        {quizName}
      </div>
    </div>
  );
}

export default QuizNameAndLogo;
