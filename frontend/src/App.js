import Inicio from "./components/Inicio";
import Mapa from "./components/Mapa";
import Reciclables from "./components/Reciclables";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reciclables" element={<Reciclables/>} />
      </Routes>
    </Router>
  );
}

export default App;
