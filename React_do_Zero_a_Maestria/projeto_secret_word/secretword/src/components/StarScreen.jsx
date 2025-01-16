//CSS
import "./StartScreen.css";
//REACT
import { useCallBack, useEffect, useState } from "react";
//data
import { wordslist } from "../data/words";

const StarScreen = () => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para iniciar o jogo</p>
      <button>Começar o jogo</button>
    </div>
  );
};

export default StarScreen;
