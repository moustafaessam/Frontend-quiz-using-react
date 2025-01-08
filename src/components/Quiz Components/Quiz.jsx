import styles from "../../styles/Quiz Styling/Quiz.module.css";

function Quiz({ children }) {
  return <section className={styles.quizSection}>{children}</section>;
}

export default Quiz;
