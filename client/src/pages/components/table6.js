import * as React from 'react';
import Row6 from './row6.js';

function Table6({data}) {
    const table = data?.map(request =>
        <Row6 id = {request.id} assignmentID = {request.assignmentID} assignmentResponseID= {request.assignmentResponseID} status= {request.status} initialAvailableDate= {request.initialAvailableDate} endAvailableDate= {request.endAvailableDate}/>
    ); 
    return(
        <div>
        <table className="table table-hover" id="table">
            <thead>
            <tr>
                <th scope="col">ID Solicitud</th>
                <th scope="col">ID asignacion</th>
                <th scope="col">ID solicitada</th>
                <th scope="col">Estado</th>
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
  export default Table6;