import FormReciclable from "./components/FormReciclable";
import Inicio from "./components/Inicio";
import Mapa from "./components/Mapa";
import Reciclables from "./components/Reciclables";
import FormPapel from './components/FormPapel';
import FormPlastico from "./components/FormPlastico";
import FormVidrio from "./components/FormVidrio";
import FormMetal from "./components/FormMetal";
import ReciclablesList from './components/ReciclablesList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reciclables" element={<Reciclables/>} />
        <Route path="/reciclables/Agregar-papel" element={<FormReciclable/>} />
        <Route path="/agregar/papel" element={<FormPapel />} />
        <Route path="/agregar/plastico" element={<FormPlastico />} />
        <Route path="/agregar/vidrio" element={<FormVidrio />} />
        <Route path="/agregar/metal" element={<FormMetal />} />
        <Route path="/ver/reciclados" element={<ReciclablesList />} />
      </Routes>
    </Router>
  );
}

export default App;
