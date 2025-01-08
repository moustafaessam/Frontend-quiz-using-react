import { useState } from "react";
// Global Imports
import AppWrap from "./AppWrap";
// Header Imports
import Header from "../Header Components/Header";
import Mode from "../Header Components/Mode";
import QuizNameAndLogo from "../Header Components/QuizNameAndLogo";
// Start Menu Imports
import StartMenu from "../Start Menu/StartMenu";
import StartMenuHeader from "../Start Menu/StartMenuHeader";
import QuizOptions from "../Start Menu/QuizOptions";
import QuizOption from "../Start Menu/QuizOption";
// Quiz Imports
import Quiz from "../Quiz Components/Quiz";
import Question from "../Quiz Components/Question";
import OptionsAndSubmit from "../Quiz Components/OptionsAndSubmit";
import Submit from "../Quiz Components/Submit";
import Options from "../Quiz Components/Options";
// Result Imports
import Result from "../Result Components/Result";
import ResultHeader from "../Result Components/ResultHeader";
import ScoreAndPlayAgainButton from "../Result Components/ScoreAndPlayAgainButton";
import Score from "../Result Components/Score";
import PlayAgain from "../Result Components/PlayAgain";
// Other Imports
import { useSelector } from "react-redux";
import data from "../../assets/data.json";

function App() {
  const { quizStatus } = useSelector((store) => store);
  // true = light , false == dark
  const [mode, setMode] = useState(true);
  return (
    <AppWrap mode={mode}>
      <Header>
        {quizStatus !== "StartMenu" ? (
          <QuizNameAndLogo mode={mode} />
        ) : (
          // Used a div in here only for styling
          <div></div>
        )}
        <Mode mode={mode} setMode={setMode} />
      </Header>
      {quizStatus === "StartMenu" ? (
        <StartMenu>
          <StartMenuHeader mode={mode} />
          <QuizOptions>
            <QuizOption
              name="HTML"
              img="/images/icon-html.svg"
              mode={mode}
              bgC={"#FFF1E9"}
            />
            <QuizOption
              name="CSS"
              img="/images/icon-css.svg"
              mode={mode}
              bgC={"#E0FDEF"}
            />
            <QuizOption
              name="Javascript"
              img="/images/icon-javascript.svg"
              mode={mode}
              bgC={"#EBF0FF"}
            />
            <QuizOption
              name="Accessibility"
              img="/images/icon-accessibility.svg"
              mode={mode}
              bgC={"#F6E7FF"}
            />
          </QuizOptions>
        </StartMenu>
      ) : quizStatus === "Started" ? (
        <Quiz>
          <Question mode={mode} />
          <OptionsAndSubmit>
            <Options mode={mode} />
            <Submit />
          </OptionsAndSubmit>
        </Quiz>
      ) : (
        <Result>
          <ResultHeader mode={mode} />
          <ScoreAndPlayAgainButton>
            <Score mode={mode} />
            <PlayAgain />
          </ScoreAndPlayAgainButton>
        </Result>
      )}
    </AppWrap>
  );
}

export default App;
