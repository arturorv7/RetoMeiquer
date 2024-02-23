import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";
import Calendar from './components/Calendar';
import Table3 from './components/table3'; 
import { useState } from "react";
import Table4 from './components/table4';
import Table5 from './components/table5';

function callApi3() {
    const id = null;
    const studentID = document.getElementById('matricula').value;
    const taskID = document.getElementById('IDtarea').value;
    const dueDate = document.getElementById('dueDate').value;
    const initialDate = document.getElementById('initialDate').value;

    
    const uri = `/api/assignments`;
  
    axios.post(uri, {id, studentID, taskID, dueDate, initialDate})
      .then(response => {
        console.log(response.data);
        alert('La asignación ha sido registrada');
      })
      .catch(error => {
        console.error(error);
        alert('Error registrando la asignación');
      });
  }
const RegistroA = (props) =>{

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/assignments`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);

      const [data2, setData2] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/users`)
          .then((res) => res.json())
          .then((data) => setData2(data));
      }, []);

      const [data3, setData3] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/tasks`)
          .then((res) => res.json())
          .then((data) => setData3(data));
      }, []);

    const [calendarValue, setCalendarValue] = useState("");
    const [calendarValue2, setCalendarValue2] = useState("");
 
    const handleCalendarChange = (element, currentValue) => {
      setCalendarValue(currentValue);
    };
    const handleCalendarChange2 = (element, currentValue2) => {
        setCalendarValue2(currentValue2);
      };
    return (
      <>
      <div className='derecha' >
      <Navbar brand ="Registro asignaciones" />
      <div > 
        <div className='tableContainer paired'>
          <div className='r1'><Table4 data={data2}/></div>
          <div className='r1'><Table5 data={data3}/></div>
            
        </div>
        <div className='container dropShadow'>
          <h2 className="home-text08">Ingresar datos</h2>
          <div className="home-container1">
          <form onSubmit={() => { callApi3(); window.location.reload(); }} >
          <input type="text" placeholder="Matricula" className="input" id='matricula' required maxLength={9} minLength={9}/>
          <input type="text" placeholder="ID Tarea" className="input" id='IDtarea' required maxLength={3}/>
          <input type="hidden" placeholder="Fecha final" value={calendarValue} className="input" id='dueDate' disabled required />
          <input type="hidden" placeholder="Fecha de inicio" value={calendarValue2} className="input" id='initialDate' disabled required/>
          <input type='submit' className="defaultButton" value="Registrar"></input>
          </form>
          <Calendar options={{
              format: 'YYYY-MM-DD HH:MM:SS',
              time: true,
              placeholder: "Disponibilidad inicial",
            onchange: handleCalendarChange,
            }}/>
            <Calendar options={{
            placeholder: "Disponibilidad final",
            onchange: handleCalendarChange2,
              format: 'YYYY-MM-DD HH:MM:SS',
              time: true,
            }}/>          
        </div>
        <div className='tableContainer'>
          <Table3 data={data}/>
        </div>
        
        <button className="defaultButton"><Link to="/Asignar">Regresar</Link></button>
      </div>
      </div>
      </div>
      </>
    );
  }
  export default RegistroA;