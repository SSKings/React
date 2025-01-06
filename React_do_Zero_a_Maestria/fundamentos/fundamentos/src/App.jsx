//Styles / css
import "./App.css";

//components
import PrimeiroComponente from "./components/PrimeiroComponente";
import TemplateExpressions from "./components/TemplateExpressions";
import ComponenteQualquer from "./components/ComponenteQualquer";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <ComponenteQualquer />
      <Events />
    </div>
  );
}

export default App;
