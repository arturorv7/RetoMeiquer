import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Table6 from './components/table6';  
import axios from 'axios';

function callApi6() {
  const id = document.getElementById('id').value;
  const select = document.getElementById('selection').value;

  if (select == 1){
      const url = `/api/accept`;

  axios.put(url, {id})
    .then(response => {
      console.log(response.data);
      alert('Se ha aceptado la solicitud');
    })
    .catch(error => {
      console.error(error);
      alert('Error al aceptar la solicitud');
    });
  }
  if (select == 2){
      const url = `/api/reject`;

  axios.put(url, {id})
    .then(response => {
      console.log(response.data);
      alert('Se ha rechazado la solicitud');
    })
    .catch(error => {
      console.error(error);
      alert('Error al rechazar la solicitud');
    });
  }
}

function hideAcepted() {
    document.getElementById("acepted").style.display = "none";
    document.getElementById("rejected").style.display = "block";
    
  }

  function hideRejected() {
    document.getElementById("rejected").style.display = "none";
    document.getElementById("acepted").style.display = "block";
  }

const Request = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests0`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const [data2, setData2] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests1`)
        .then((res) => res.json())
        .then((data) => setData2(data));
    }, []);
    const [data3, setData3] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests2`)
        .then((res) => res.json())
        .then((data) => setData3(data));
    }, []);
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Lista de solicitudes" />
      </div>    

    <div className='tableContainer paired'>
        <div className='r1'>
            <h2>Lista de solicitudes pendientes</h2>
            <br/><br/>
            <Table6 data={data}/>
        </div>
        <div className='r1'>
            <h2>Lista de solicitudes revisadas</h2>
            <button className="defaultButton" onClick={hideRejected}>Solicitudes Aceptadas</button>
            <button className="defaultButton" onClick={hideAcepted}>Solicitudes Rechazadas</button>
            <div id="acepted">
                <Table6 data={data2}/>
            </div>
            <div id="rejected">
                <Table6 data={data3}/>
            </div>
            
        </div>
            
        </div>
        <div className='container dropShadow'>
            <h2>Procesar solicitudes</h2>
            <form id="updt" onSubmit={() => {callApi6(); window.location.reload(); }}>
            <input type="text" placeholder="ID solicitud" className="input" id='id' required maxLength={4}/>
            <select type="select"  name="Opcion:" id="selection" form='updt' required>
                <option value={1}>Aceptar</option>
                <option value={2}>Rechazar</option>
              </select>
              <input type='submit' className="defaultButton" value="Enviar" ></input>
              </form>
            </div>
    </div>
    </>
  );
}
export default Request;