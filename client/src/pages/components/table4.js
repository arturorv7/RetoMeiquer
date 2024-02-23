import * as React from 'react';
import Row4 from './row4.js';

function Table4({data}) {
    const table = data?.map(imaginante =>
        <Row4 studentID = {imaginante.studentID} name = {imaginante.name}/>
    ); 
    return(
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Matricula</th>
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
  export default Table4;