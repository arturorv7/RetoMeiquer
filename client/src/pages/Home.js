import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Table from './components/table';  
import axios from 'axios';
import { Link } from "react-router-dom";

function callApi5() {
  const id = document.getElementById('id3').value;
  
  const url = `/api/imaginantes/${id}`;

  axios.delete(url)
    .then(response => {
      console.log(response.data);
      alert('El imaginante ha sido eliminado de la base de datos');
    })
    .catch(error => {
      console.error(error);
      alert('Error eliminando al imaginante');
    });
}
const Home = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/imaginantes`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Gestión de imaginantes" />
        <button className="defaultButton over dropShadow" >
        <Link to="/Registro">Registrar imaginante</Link>
      </button>
      </div>
    <div className='tableContainer'> 
      <Table data={data}/>
    </div>
    <div className='container dropShadow'>

      <h2>Borrar imaginante</h2>
      <div>
      <form onSubmit={() => { callApi5(); window.location.reload(); }}>
      <input type="text" placeholder="ID:" className="input" id='id3' required/>
      <input type='submit' className="defaultButton" value="Borrar" ></input>
      </form>
      </div>
      </div>
    </div>
    </>
  );
}
export default Home;
