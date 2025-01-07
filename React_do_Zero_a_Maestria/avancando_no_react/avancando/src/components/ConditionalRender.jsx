import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [nome, setNome] = useState("Fulano");

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for True, Sim!</p>}
      {!x && <p>Se x for False, Sim!</p>}

      <h2>if ternário</h2>
      {nome === "Cicrano" ? (
        <div>
          <p>O nome é Cicrano</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setNome("Cicrano")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
