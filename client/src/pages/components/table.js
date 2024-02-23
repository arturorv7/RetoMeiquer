import * as React from 'react';
import Row from './row.js';
import "./table.css"

function Table({data}) {
    const table = data?.map(imaginante =>
        <Row id = {imaginante.studentID} nombre = {imaginante.name} email ={imaginante.email} tareas = {imaginante.tasks} equipo = {imaginante.team}/>
    ); 
    return(
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th >Matricula</th>
                <th >Nombre</th>
                <th >E-mail</th>
                <th >Tareas</th>
                <th >Equipo</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table;