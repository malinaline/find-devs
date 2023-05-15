import React from "react";
import Developers from "./developers.json";

function AllTable() {
  return (
    <div className="table">
      {Developers &&
        Developers.map((developer) => {
          return (
            <table className="">
              <tr key={developer.id}>
                <td>{developer.title}</td>
                <td>{developer.experienceAmount}</td>
                <td>{developer.availability}</td>
                <td>{developer.office.city}</td>
                <td>{developer.price}</td>
              </tr>
            </table>
          );
        })}
    </div>
  );
}

export default AllTable;
