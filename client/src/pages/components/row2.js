import React from 'react';


export default function Row2({id,name, decription}) {
  
    return (

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{decription}</td>

        </tr>

    );
}