import { useDispatch } from "react-redux";
import { quizStarted } from "../../store/store";
import styles from "../../styles/Start Menu Styling/QuizOption.module.css";

function QuizOption({ bgC, name, img, mode }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.quizOptionContainer} ${
        mode === true ? styles.whiteBackground : styles.blueBackgorund
      }`}
      onClick={() => {
        dispatch(quizStarted(name));
      }}
    >
      <div className={styles.imgContainer} style={{ backgroundColor: bgC }}>
        <img src={img} alt={name} className={styles.img} />
      </div>
      <p
        className={`${styles.name} ${
          mode === true ? styles.lightName : styles.darkName
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export default QuizOption;
