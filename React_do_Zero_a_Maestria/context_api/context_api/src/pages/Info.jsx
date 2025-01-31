import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Info = () => {
  const { counter } = useContext(CounterContext);

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Informações</h1>
      <p>Valor do contadot: {counter}</p>
      <div>
        <button onClick={() => setTitleColor("RED")}>RED</button>
        <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
      </div>
    </div>
  );
};

export default Info;
