const Desafio = () => {
  const num1 = 10;
  const num2 = 50;

  const onClickSomar = () => {
    alert(`A soma dos dois números é ${num1 + num2}`);
  };

  return (
    <div>
      <div>
        <h2>
          Número 1 : {num1} e Número 2 : {num2}
        </h2>
      </div>
      <div>
        <button onClick={onClickSomar}>Somar</button>
      </div>
    </div>
  );
};

export default Desafio;
