import styles from "../../styles/Result Styling/ScoreAndPlayAgainButton.module.css";

function ScoreAndPlayAgainButton({ children }) {
  return <div className={styles.scoreAndButtonContainer}>{children}</div>;
}

export default ScoreAndPlayAgainButton;
