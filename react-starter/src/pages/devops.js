import React from "react";
import Developers from "./developers.json";

export default function DeveopsTable() {
  // 👇️ filter with 1 condition
  const filtered = Developers.filter((developer) => {
    return developer.title === "Systemarkitekt";
  });

  return (
    <div>
      {filtered.map((developer) => {
        return (
          <table className="table">
            <tr key={developer.id}>
              <td>{developer.title}</td>
              <td>{developer.experienceAmount}</td>
              <td>{developer.office.city}</td>
              <td>{developer.experienceAmount}</td>
              <td>{developer.availability}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
