//css
import "./App.css";
//react
import { useCallBack, useEffect, useState } from "react";
//data
import { wordslist } from "./data/words";
//components
import StarScreen from "./components/StarScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordslist);

  //começar o jogo
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // processa letras
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };
  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StarScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
};

export default App;
