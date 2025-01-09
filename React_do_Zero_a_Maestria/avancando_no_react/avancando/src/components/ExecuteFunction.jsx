const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>
        Clique aqui para executar a função passada como prop
      </button>
    </div>
  );
};

export default ExecuteFunction;
