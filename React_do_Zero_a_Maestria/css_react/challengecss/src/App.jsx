import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, marca: "ferrari", ano: 2025, potencia: "200HP" },
    { id: 2, marca: "lamborguini", ano: 2024, potencia: "180HP" },
    { id: 3, marca: "fiat", ano: 1998, potencia: "????" },
  ];

  return (
    <div>
      <h1>Desafio 5 - CSS</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          marca={car.marca}
          ano={car.ano}
          potencia={car.potencia}
        />
      ))}
    </div>
  );
}

export default App;
