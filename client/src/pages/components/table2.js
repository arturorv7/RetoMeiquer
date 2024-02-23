import * as React from 'react';
import Row2 from './row2.js';

function Table2({data}) {
    const table = data?.map(actividad =>
        <Row2 id = {actividad.id} name = {actividad.name} decription ={actividad.decription}/>
    ); 
    return(
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table2;

  /* 
  function Table2({data}) {
    const table = data?.map(actividad =>
        <Row2 id = {actividad.id} name = {actividad.studentID} taskID ={actividad.taskID} status ={actividad.status} dueDate ={actividad.dueDate} initialData = {actividad.dueDate}/>
    ); 
    return(
        <div>
        <table className="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Matricula</th>
                <th scope="col">ID tarea</th>
                <th scope="col">Estatus</th>
                <th scope="col">Fecha Limite</th>
                <th scope="col">Fecha inicial</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table2;
  */