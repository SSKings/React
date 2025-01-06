const Events = () => {
  const handleMyEvent = (e) => {
    alert("Ativou Evento!");
    console.log("Ativou Evento!");
    console.log(e);
  };

  const renderAlgumaCoisa = (x) => {
    if (x) {
      return <h1>Renderizando se true</h1>;
    } else {
      return <h1>Renderizando se false</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também!
        </button>
      </div>
      {renderAlgumaCoisa(true)}
      {renderAlgumaCoisa(false)}
    </div>
  );
};

export default Events;
