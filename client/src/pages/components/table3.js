import * as React from 'react';
import Row3 from './row3.js';

function Table3({data}) {
    const table = data?.map(asignacion =>
        <Row3 id = {asignacion.id} studentID = {asignacion.studentID} taskID ={asignacion.taskID} status ={asignacion.status} dueDate = {asignacion.dueDate} initialDate = {asignacion.initialDate}/>
    ); 
    return(
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">ID Asignación</th>
                <th scope="col">Matricula</th>
                <th scope="col">ID tarea</th>
                <th scope="col">status</th>
                <th scope="col">Disponibilidad inicial</th>
                <th scope="col">Disponibilidad final</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table3;