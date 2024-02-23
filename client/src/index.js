import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import Update from "./pages/Update";
import Registro from "./pages/Registro";
import Actividades from "./pages/actividades";
import RegistroAct from "./pages/RegistroAct";
import UpdateAct from "./pages/UpdateAct";
import Asignaciones from "./pages/asignaciones";
import RegistroA from "./pages/RegistroA";
import UpdateA from './pages/UpdateA';
import Request from './pages/Request';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Update" element={<Update />} />
          <Route path="Actividades" element={<Actividades />} />
          <Route path="RegistroAct" element={<RegistroAct />} />
          <Route path="UpdateAct" element={<UpdateAct />} />
          <Route path="Asignar" element={<Asignaciones />} />
          <Route path="RegistroA" element={<RegistroA />} />
          <Route path="UpdateA" element={<UpdateA />} />
          <Route path="Request" element={<Request />} />
        </Route >
      </Routes>
    </Router>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))