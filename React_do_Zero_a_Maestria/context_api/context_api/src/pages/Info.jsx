import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Info = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Informações</h1>
      <p>Valor do contadot: {counter}</p>
    </div>
  );
};

export default Info;
