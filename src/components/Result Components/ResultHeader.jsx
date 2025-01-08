import styles from "../../styles/Result Styling/ResultHeader.module.css";

function ResultHeader({ mode }) {
  return (
    <div className={styles.resultHeaderContainer}>
      <div
        className={`${styles.parg1} ${
          mode === true ? styles.parg1Light : styles.parg1Dark
        }`}
      >
        Quiz Completed
      </div>
      <div
        className={`${styles.parg2} ${
          mode === true ? styles.parg2Light : styles.parg2Dark
        }`}
      >
        You Scored...
      </div>
    </div>
  );
}

export default ResultHeader;
