import { useEffect, useState } from "react";
import Header from "./components/Header";
import Highscores from "./components/Highscores";
import Question from "./components/Question";
import QuizBody from "./components/QuizBody";
import Results from "./components/Results";

function App() {
  const questions = [
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choice: ["var", "let", "Both A and B", "None of the above"],
      answer: "Both A and B",
    },
    {
      question:
        "Upon encountering empty statements, what does the Javascript Interpreter do?",
      choice: [
        "Throws an error",
        "Ignores the statements",
        "Gives a warning",
        "None of the above",
      ],
      answer: "Ignores the statements",
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      choice: ["const", "var", "let", "constant"],
      answer: "const",
    },
    {
      question:
        "What keyword is used to check whether a given property is valid or not?",
      choice: ["in", "is in", "exists", "lies"],
      answer: "in",
    },
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript?",
      choice: ["stringify()", "parse()", "convert()", "None of the above"],
      answer: "stringify()",
    },
  ];

  const [gameState, setGameState] = useState("initial");
  const [sec, setSec] = useState(50);
  const [currentQnResult, setCurrentQnResult] = useState("");
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);
  const [highscores, setHighscores] = useState([]);

  const startQuiz = () => {
    setGameState((gameState) => (gameState = "onQuiz"));
  };

  const viewHighscores = () => {
    setGameState((gameState) => (gameState = "view highscores"));
  };

  const checkAnswer = (e) => {
    const selectedOption = e.target.innerHTML.substring(3);

    if (selectedOption === questions[questionNo].answer) {
      setCurrentQnResult((currentQnResult) => (currentQnResult = "Correct!"));
      setScore((score) => (score = score + 2));

      setQuestionNo((questionNo) => (questionNo += 1));
      if (questionNo === questions.length - 1)
        setGameState((gameState) => (gameState = "gameOver"));
    } else {
      setCurrentQnResult((currentQnResult) => (currentQnResult = "Incorrect!"));
    }
  };

  const restartGame = () => {
    setGameState("initial");
    setQuestionNo(0);
    setCurrentQnResult("");
    setScore(0);
  };

  const clearHighScore = () => {
    setGameState("view highscores");
    setHighscores([]);
  };

  const storeHighScore = (initials) => {
    console.log(initials);
    const newHighScore = { initials, score };
    setHighscores([...highscores, newHighScore]);
    setGameState("view highscores");
  };

  return (
    <div className="App">
      <Header onClick={viewHighscores} sec={sec} />

      {gameState === "initial" && <QuizBody onClick={startQuiz} />}
      {gameState === "view highscores" && (
        <Highscores
          onClick={restartGame}
          highscores={highscores}
          clearScore={clearHighScore}
        />
      )}
      {gameState === "gameOver" && (
        <Results totalScore={score} onClick={storeHighScore} />
      )}
      {gameState === "onQuiz" && (
        <Question
          question={questions[questionNo].question}
          choice={questions[questionNo].choice}
          answer={questions[questionNo].answer}
          onClick={checkAnswer}
          currentQnResult={currentQnResult}
        />
      )}
    </div>
  );
}

export default App;
