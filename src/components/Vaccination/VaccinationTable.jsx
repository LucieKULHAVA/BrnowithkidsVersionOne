import React from 'react';

import './style.css';

const VaccinationTable = ({ data }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Child´s age of vaccination</th>
          <th>Disease</th>
          <th>Vaccine</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.age}</td>
            <td>{row.disease}</td>
            <td>{row.vaccine}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default VaccinationTable;
