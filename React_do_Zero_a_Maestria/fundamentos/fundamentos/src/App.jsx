//Styles / css
import "./App.css";
import ComponenteQualquer from "./components/ComponenteQualquer";

//components
import PrimeiroComponente from "./components/PrimeiroComponente";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <ComponenteQualquer />
    </div>
  );
}

export default App;
