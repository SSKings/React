const CarDetails = ({ marca, ano, potencia }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Ano: {ano}</li>
        <li>Potência: {potencia}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
