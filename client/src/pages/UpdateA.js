import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Table3 from './components/table3'; 
import { useState } from "react";
import Calendar from './components/Calendar';



function callApi4() {
  const id = document.getElementById('id').value;
  const studentID = document.getElementById('matricula').value;
  const taskID = document.getElementById('IDtarea').value;
  const status = document.getElementById('status').value;
  const dueDate = document.getElementById('dueDate').value;
  const initialDate = document.getElementById('initialDate').value;


  
    const url = `/api/assignments/${id}`;
  
    axios.put(url, {id ,studentID , taskID, status, dueDate,initialDate})
      .then(response => {
        console.log(response.data);
        alert('Información de la asignación actualizada con exito');
      })
      .catch(error => {
        console.error(error);
        alert('Error al buscar la asignación');
      });
  }
  

const UpdateA = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/assignments`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const info = data;

    const [calendarValue, setCalendarValue] = useState("");
    const [calendarValue2, setCalendarValue2] = useState("");
 
    const handleCalendarChange = (element, currentValue) => {
      setCalendarValue(currentValue);
    };
    const handleCalendarChange2 = (element, currentValue2) => {
        setCalendarValue2(currentValue2);
      };
    return (
      <div className='derecha' >
      <Navbar brand ="Actualizar datos de las asignaciones" />
      <div>
      <div className='tableContainer'>
         <Table3 data={info}/>
      </div>
     <div className='container dropShadow'>
      <h2 className="home-text09">Ingresa los nuevos datos</h2>
      <form id='updtA' onSubmit={() => { callApi4(); window.location.reload(); }} >
        <input type="number" placeholder="id:" className="input" id='id' required maxLength={3}/>
        <input type="text" placeholder="Matricula" className="input" id='matricula' required maxLength={9} minLength={9}/>
        <input type="number" placeholder="ID Tarea" className="input" id='IDtarea' required maxLength={3}/>
        <select type="select"  name="Estado:" id="status" form='updtA' required>
                <option value={0}>Pendiente</option>
                <option value={1}>Aprobado</option>
              </select>
        <input type="hidden" placeholder="Fecha final" value={calendarValue} className="input" id='dueDate' disabled required/>
        <input type="hidden" placeholder="Fecha de inicio" value={calendarValue2} className="input" id='initialDate' disabled required/>
        <Calendar className="input"options={{
          placeholder: "Disponibilidad inicial",
          onchange: handleCalendarChange2,
            format: 'YYYY-MM-DD HH:MM:SS',
            time: true,
          }}/>
        <Calendar className="input"options={{
            format: 'YYYY-MM-DD HH:MM:SS',
            time: true,
            placeholder: "Disponibilidad final",
          onchange: handleCalendarChange,
          }}/>
          <br></br>
          <input type='submit' className="defaultButton" value="Registrar"></input>
      </form>
     </div>
      
      </div>
      </div>
    );
  }
  export default UpdateA;