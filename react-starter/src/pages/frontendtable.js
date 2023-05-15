import React from "react";
import Developers from './developers.json'


export default function FrontendTable() {


  // 👇️ filter with 1 condition
  const filtered = Developers.filter(developer => {
    return developer.title === 'Frontend Developer';
  });

  return (
    <div className="table">
      {filtered.map(developer => {
        return ( 
        <table>
          <tr key={developer.id}>
            <td>{ developer.title }</td>
            <td>{ developer.experienceAmount }</td>
            <td>{ developer.office.city }</td>
            <td>{ developer.experienceAmount }</td>
            <td>{ developer.availability }</td>
          </tr>
        </table>
        );
      })}
    </div>
  );
}