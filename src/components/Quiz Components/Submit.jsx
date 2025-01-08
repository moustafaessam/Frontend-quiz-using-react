import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Quiz Styling/Submit.module.css";
import store, { checkAnswer, nextQuestion } from "../../store/store";
import data from "../../assets/data.json";

console.log();

function Submit() {
  const dispatch = useDispatch();
  const { selectedAnswer, answerChecked, questionNumber, quizIndex } =
    useSelector((store) => store);
  return (
    <div
      className={`${styles.submitButton} ${
        selectedAnswer === "" ? styles.noAnswerSelected : styles.answerSelected
      }`}
      onClick={() => {
        selectedAnswer === ""
          ? ""
          : answerChecked === false
          ? dispatch(checkAnswer())
          : "";
        answerChecked === true ? dispatch(nextQuestion()) : "";
      }}
    >
      {answerChecked
        ? questionNumber >= data.quizzes[quizIndex].questions.length - 1
          ? "Review Result"
          : "Next Question"
        : "Submit Answer"}
    </div>
  );
}

export default Submit;
