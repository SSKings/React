//hooks
import { useState } from "react";
//styles / css
import "./App.css";
//images
import GokuEGohan from "./assets/goku_gohan.jpg";
//components
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowNameWithProps from "./components/ShowNameWithProps";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [name] = useState("SSkings");

  const pessoas = [
    { id: 1, nome: "Sérgio", idade: 31, profissao: "Desenvolvedor Full-Stack" },
    { id: 2, nome: "Vera", idade: 36, profissao: "Nail Designer" },
    { id: 3, nome: "Neto", idade: 1.9, profissao: "Come e dorme" },
  ];

  const cars = [
    { id: 1, marca: "Lamborghini", km: 0, cor: "Preto", novo: true },
    { id: 2, marca: "BMW", km: 10000, cor: "Branco", novo: false },
    { id: 3, marca: "Ferrari", km: 0, cor: "Vermelho", novo: true },
  ];

  const showMessage = () => {
    console.log("Evento do componente pai!");
  };

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem da pasta public que é ligada a pasta a src das imgs*/}
      <div>
        <h3>Imagem da pasta public</h3>
        <img src="/goku_quebrado.jpg" alt="goku_quebrado" />
      </div>
      {/* Imagem em assets*/}
      <div>
        <h3>Imagem da pasta assets</h3>
        <img src={GokuEGohan} alt="Goku_e_Gohan" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowNameWithProps name={name} />
      {/* destructuring */}
      <CarDetails marca="BMW" km={0} cor="Azul" novo={true} />
      {/* reaproveitamento */}
      <CarDetails marca="FIAT" km={1000} cor="Preto" novo={false} />
      {/* loop em arrays de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          marca={car.marca}
          km={car.km}
          cor={car.cor}
          novo={car.novo}
        />
      ))}
      <Fragment propFragment="propriedade do fragment" />
      <Container value="VALUE">
        <p>Este é o conteudo children</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio 4*/}
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  );
};

export default App;
