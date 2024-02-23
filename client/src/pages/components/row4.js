import React from 'react';


export default function Row4({studentID , name}) {
  
    return (

        <tr>
            <td>{studentID}</td>
            <td>{name}</td>
        </tr>
    );
}