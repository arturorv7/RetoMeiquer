import './App.css';
import React from "react";
import Navbar from './components/Navbar'; 
import axios from 'axios';
import Table3 from './components/table3'; 
import { Link } from "react-router-dom";

function callApi5() {
  const id = document.getElementById('id3').value;
  
  const url = `/api/assignments/${id}`;

  axios.delete(url)
    .then(response => {
      console.log(response.data);
      alert('La asignación ha sido eliminada de la base de datos');
    })
    .catch(error => {
      console.error(error);
      alert('Error eliminando la asignación');
    });
}

const Asignaciones = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/assignments`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Lista de asignaciones" />
        <button className="defaultButton over dropShadow" >
        <Link to="/RegistroA">Registrar asignacion</Link>
      </button>
      </div>
    <div className='tableContainer'> 
    <Table3 data={data}/>
    </div>
    <div className='container dropShadow'>

      <h2>Borrar Asignacion</h2>
      <div>
      <form onSubmit={() => { callApi5(); window.location.reload(); }}>
      <input type="text" placeholder="ID:" className="input" id='id3' required maxLength={3}/>
      <input type='submit' className="defaultButton" value="Borrar" ></input>
      </form>
      </div>
      </div>
    </div>
    </>
  );
}
export default Asignaciones;