import React from "react";
import Developers from './developers.json'


export default function BackendTable() {


  // 👇️ filter with 1 condition
  const filtered = Developers.filter(developer => {
    return developer.title === 'Backend Developer';
  });

  


  // 👇️ filter with 2 conditions
  const filtered2 = Developers.filter(developer => {
    return developer.title === 'Backend developer' && developer.id === 3;
  });


  console.log('filtered2: ', filtered2);

  return (
    <div className="table">
      {filtered.map(developer => {
        return (
          <table>
            <tr  key={developer.id}>
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
