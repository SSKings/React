//css
import "./App.css";
//react
import { useCallBack, useEffect, useState } from "react";
//data
import { wordslist } from "../data/words";
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

  return (
    <div className="App">
      {gameStage === "start" && <StarScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
};

export default App;
