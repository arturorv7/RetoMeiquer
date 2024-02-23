import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";

function callApi3() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const decription = document.getElementById('decription').value;

    
    const uri = `/api/task`;
  
    axios.post(uri, {id ,name , decription})
      .then(response => {
        console.log(response.data);
        alert('La actividad ha sido registrada');
      })
      .catch(error => {
        console.error(error);
        alert('Error registrando la actividad');
      });
  }
  
const RegistroAct = (props) =>{
    return (
      <>
      <div className='derecha' >
        <Navbar brand ="Registro actividades" />
        <div className='container dropShadow'> 
          <h2 className="home-text08">Ingresar datos</h2>
          <div className="home-container1">
            <form onSubmit={() => { callApi3(); window.location.reload(); }} >
              <input type="text" placeholder="ID:" className="input" id='id' required maxLength={3}/>
              <input type="text" placeholder="Nombre:" className="input" id='name' required maxLength={80}/>
              <textarea type="text" placeholder="Descripción:"  id='decription' maxLength={250} required/>
            <input type='submit' className="defaultButton" value="Registrar"></input>
            </form>
            </div>
          <button className="defaultButton"><Link to="/actividades">Regresar</Link></button>
        </div>
      </div>
      </>
    );
  }
  export default RegistroAct;