import styles from "../../styles/Result Styling/Result.module.css";

function Result({ children }) {
  return <section className={styles.resultSection}>{children}</section>;
}

export default Result;
