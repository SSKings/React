//styles / css
import "./App.css";
//images
import GokuEGohan from "./assets/goku_gohan.jpg";
//components
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

const App = () => {
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
    </div>
  );
};

export default App;
