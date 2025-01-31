// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

//  4 - refatorando  com hook
import { useCounterContext } from "../hooks/useCounterContext";

import ChangeCounter from "../components/ChangeCounter";

//  5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Principal = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Principal</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando o contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>RED</button>
        <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
      </div>
    </div>
  );
};

export default Principal;
