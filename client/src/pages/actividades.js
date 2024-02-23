import './App.css';
import React from "react";
import Navbar from './components/Navbar'; 
import axios from 'axios';
import Table2 from './components/table2'; 
import { Link } from "react-router-dom";

function callApi5() {
  const id = document.getElementById('id3').value;
  
  const url = `/api/task/${id}`;

  axios.delete(url)
    .then(response => {
      console.log(response.data);
      alert('La actividad ha sido eliminado de la base de datos');
    })
    .catch(error => {
      console.error(error);
      alert('Error eliminando la actividad de la base de datos');
    });
}

const Actividades = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/task`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Lista de actividades" />
        <button className="defaultButton over dropShadow" >
        <Link to="/RegistroAct">Registrar actividad</Link>
      </button>
      </div>
    <div className='tableContainer'> 
    <Table2 data={data}/>
    </div>
    <div className='container dropShadow'>

      <h2>Borrar Actividad</h2>
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
export default Actividades;