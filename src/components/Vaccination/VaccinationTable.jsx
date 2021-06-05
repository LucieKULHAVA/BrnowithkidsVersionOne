import React from 'react';

import './style.css';

const VaccinationTable = ({ age, disease, vaccine }) => {
  return (
    <tr>
      <th>Child´s age of vaccination</th>
      <th>Disease</th>
      <th>Vaccine</th>
    </tr>
  );
};

export default VaccinationTable;
