import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Principal = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Principal</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Principal;
