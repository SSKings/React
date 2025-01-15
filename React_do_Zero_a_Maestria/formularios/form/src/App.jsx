import "./App.css";
import MyForm from "./components/MyForm";

const App = () => (
  <div>
    <h1>Formulários</h1>
    <MyForm
      user={{
        name: "sérgio",
        email: "sergio@email.com",
        bio: "Sou um programador",
        role: "admin",
      }}
    />
  </div>
);

export default App;
