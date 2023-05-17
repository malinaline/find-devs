// new code

import React, { useState } from "react";
import { Link } from "react-router-dom";
import developersData from "./developersData..json";

function DevelopersList() {
  const [category, setCategory] = useState("all"); // Initial category state

  // Filter data by category
  const filteredData = developersData.filter((developer) => {
    if (category === "all") {
      return true; // Return all data when category is 'all'
    } else {
      return developer.category === category; // Filter data by category
    }
  });

  return (
    <div>
      <nav className="nav">
        <h1>
          FIND YOUR <b>EXPERT</b>
        </h1>{" "}
        <Link
          className="link"
          to="/developers"
          onClick={() => setCategory("all")}
        >
          ❤ All
        </Link>
        <Link
          className="link"
          to="/developers/frontend"
          onClick={() => setCategory("Frontend")}
        >
          Frontend
        </Link>
        <Link
          className="link"
          to="/developers/backend"
          onClick={() => setCategory("Backend")}
        >
          Backend
        </Link>
        <Link
          className="link"
          to="/developers/devops"
          onClick={() => setCategory("Devops")}
        >
          Devops
        </Link>
      </nav>

      <table className="">
        <thead className="thead">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Price</th>
            <th>Experience Amount</th>
            <th>ID</th>
            <th>Office City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((developer) => (
            <tr key={developer.id}>
              <td>{developer.title}</td>
              <td>{developer.category}</td>
              <td>{developer.availability}</td>
              <td>{developer.price}</td>
              <td>{developer.experienceAmount}</td>
              <td>{developer.id}</td>
              <td>{developer.office.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DevelopersList;
