import * as React from 'react';
import Row5 from './row5.js';

function Table5({data}) {
    const table = data?.map(tarea =>
        <Row5 id = {tarea.id} name = {tarea.name}/>
    ); 
    return(
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">ID Tarea</th>
                <th scope="col">Nombre</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table5;