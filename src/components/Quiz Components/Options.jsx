import styles from "../../styles/Quiz Styling/Options.module.css";
import data from "../../assets/data.json";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { selectedAnswer } from "../../store/store";

function Options({ mode }) {
  const {
    answerChecked,
    selectedAnswer: answerChoosen,
    options,
    correctAnswer,
  } = useSelector((store) => store);
  const dispatch = useDispatch();
  function numberToLetter(num) {
    return String.fromCharCode(65 + num);
  }

  return (
    <div className={styles.optionsContainer}>
      {options.map((e, i) => {
        return (
          <div
            key={e}
            className={`${styles.option} ${
              mode === true ? styles.optionLight : styles.optionDark
            } ${
              e === answerChoosen && answerChecked === false
                ? styles.clicked
                : ""
            } ${
              answerChecked && e === answerChoosen
                ? correctAnswer === answerChoosen
                  ? styles.correct
                  : styles.wrong
                : ""
            }`}
            onClick={() => {
              answerChecked ? null : dispatch(selectedAnswer(e));
            }}
          >
            <div className={styles.optionLetterContainer}>
              <div className={styles.optionLetter}>{numberToLetter(i)}</div>
            </div>
            <div
              className={`${styles.optionContent} ${
                mode === true
                  ? styles.optionContentLight
                  : styles.optionContentDark
              }`}
            >
              {e}
            </div>
            {(e === answerChoosen || e === correctAnswer) && answerChecked ? (
              e === answerChoosen && answerChoosen !== correctAnswer ? (
                <div className={styles.checkAnswerImg}>
                  <img
                    alt="incorrect"
                    src="/images/icon-incorrect.svg"
                    className={styles.answerImg}
                  />
                </div>
              ) : (
                <div className={styles.checkAnswerImg}>
                  <img
                    alt="correct"
                    src="/images/icon-correct.svg"
                    className={styles.answerImg}
                  />
                </div>
              )
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Options;

{
  /* <div
      className={`${styles.option} ${
        mode === true ? styles.optionLight : styles.optionDark
      }`}
    >
      <div className={styles.optionLetterContainer}>
        <div className={styles.optionLetter}>b</div>
      </div>
      <div
        className={`${styles.optionContent} ${
          mode === true ? styles.optionContentLight : styles.optionContentDark
        }`}
      >
        3 : 1
      </div>
    </div> */
}
