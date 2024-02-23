import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Table2 from './components/table2'; 

function callApi4() {
  const id = document.getElementById('id').value;
  const name = document.getElementById('nombre').value;
  const decription = document.getElementById('decription').value;


    const url = `/api/task/${id}`;
  
    axios.put(url, {id ,name,decription})
      .then(response => {
        console.log(response.data);
        alert('Información de la actividad actualizada con exito');
      })
      .catch(error => {
        console.error(error);
        alert('Error al buscar la actividad');
      });
  }

const UpdateAct = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/task`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const info = data;

    return (
      <div className='derecha' >
      <Navbar brand ="Actualizar datos de las actividades" />
      <div>
        <div className='tableContainer'>
          <Table2 data={info}/>
        </div>
        <div className='container dropShadow'>
          <h2 className="home-text09">Ingresa los nuevos datos</h2>
          <form onSubmit={() => {callApi4(); window.location.reload(); }}>
          <input type="text" placeholder="id:" className="input" id='id'required maxLength={3} />
          <input type="text" placeholder="nombre:" className="input" id='nombre' required maxLength={80}/>
          <textarea type="text" placeholder="descripción:" className="upd" id='decription' maxLength={250} require/>
          <br></br>
          <input type='submit' className="defaultButton" value="Actualizar" />
          </form>
        </div>
      </div>
      </div>
    );
  }
  export default UpdateAct;