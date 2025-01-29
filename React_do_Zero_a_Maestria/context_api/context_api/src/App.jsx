import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Info from "./pages/Info";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>Seção - Context API</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/principal" element={<Principal />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
