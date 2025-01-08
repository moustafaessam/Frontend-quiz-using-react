import { useDispatch } from "react-redux";
import { playAgain } from "../../store/store";
import styles from "../../styles/Result Styling/PlayAgain.module.css";

function PlayAgain() {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.playAgainButton}
      onClick={() => {
        dispatch(playAgain());
      }}
    >
      Play Again
    </div>
  );
}

export default PlayAgain;
