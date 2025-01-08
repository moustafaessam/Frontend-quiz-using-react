import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import data from "../assets/data.json";
import { thunk } from "redux-thunk";

const initialState = {
  quizStatus: "StartMenu",
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case "quiz/quizStarted":
      return {
        ...state,
        quizStatus: "Started",
        score: 0,
        quizName: action.payload.quizName,
        quizIndex: action.payload.quizIndex,
        questionNumber: 0,
        correctAnswer: action.payload.correctAnswer,
        question: action.payload.question,
        options: action.payload.options,
        selectedAnswer: "",
        answerChecked: false,
      };
    case "quiz/selectedAnswer":
      return { ...state, selectedAnswer: action.payload.selectedAnswer };
    case "quiz/nextQuestion":
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
        options:
          data.quizzes[state.quizIndex].questions[state.questionNumber + 1]
            .options,
        correctAnswer:
          data.quizzes[state.quizIndex].questions[state.questionNumber + 1]
            .answer,
        question:
          data.quizzes[state.quizIndex].questions[state.questionNumber + 1]
            .question,
        selectedAnswer: "",
        answerChecked: false,
      };
    case "quiz/increaseScore":
      return { ...state, score: state.score + 1 };
    case "quiz/endQuiz":
      return {
        quizStatus: "resultMenu",
        score: state.score,
        quizName: state.quizName,
        questionNumber: state.questionNumber,
      };
    case "quiz/playAgain":
      return { ...initialState };
    case "quiz/answerChecked":
      return { ...state, answerChecked: true };
    default:
      return state;
  }
}

export function quizStarted(quizName) {
  return function (dispatch) {
    let quizIndex;
    // Find the quizIndex based on the selected quiz
    for (let i = 0; i < data.quizzes.length; i++) {
      const quizTitle = data.quizzes[i].title.toLowerCase();
      if (quizTitle === quizName.toLowerCase()) {
        quizIndex = i;
        break;
      }
    }
    const options = data.quizzes[quizIndex].questions[0].options;
    const correctAnswer = data.quizzes[quizIndex].questions[0].answer;
    const question = data.quizzes[quizIndex].questions[0].question;
    dispatch({
      type: "quiz/quizStarted",
      payload: { quizName, quizIndex, options, correctAnswer, question },
    });
  };
}

export function selectedAnswer(selectedAnswer) {
  return { type: "quiz/selectedAnswer", payload: { selectedAnswer } };
}

export function checkAnswer() {
  return function (dispatch, getState) {
    const state = getState();
    // if (state.questionNumber >= 9) {
    //   dispatch({ type: "quiz/endQuiz" });
    // }
    if (state.selectedAnswer === state.correctAnswer) {
      dispatch(increaseScore());
    }
    dispatch({ type: "quiz/answerChecked" });
  };
}

// export function nextQuestion() {
//   return { type: "quiz/nextQuestion" };
// }

export function nextQuestion() {
  return function (dispatch, getState) {
    const state = getState();
    if (state.questionNumber >= 9) {
      return dispatch(endQuiz());
    }
    dispatch({ type: "quiz/nextQuestion" });
  };
}

export function increaseScore() {
  return { type: "quiz/increaseScore" };
}

export function endQuiz() {
  return { type: "quiz/endQuiz" };
}

export function playAgain() {
  return { type: "quiz/playAgain" };
}

// Install the dependecy first of redux dev tools
// const store = createStore(
//   quizReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = createStore(quizReducer, applyMiddleware(thunk));

export default store;
