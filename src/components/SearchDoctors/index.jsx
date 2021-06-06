import React, { useState } from 'react';

import Doctor from './Doctor';
import { facilities } from '../../constants/doctors';
import './style.css';

const SearchDoctor = () => {
  const [results, setResults] = useState(facilities);
  const [listChecked] = useState([]);
  let ResultTemporary = [];

  const handleChangeInput = (event) => {
    if (event.target.checked) {
      listChecked.push(event.target.value);
    } else {
      listChecked.pop(event.target.value);
    }

    filterDoctors();
  };

  const filterDoctors = () => {
    listChecked.forEach((languague) => {
      facilities.forEach((doctor) => {
        if (doctor.languagues.search(languague) !== -1) {
          if (ResultTemporary.indexOf(doctor) === -1) {
            ResultTemporary.push(doctor);
          }
        }
      });
    });

    if (ResultTemporary.length > 0) {
      setResults(ResultTemporary);
    } else {
      setResults(facilities);
    }
  };

  return (
    <>
      <div className="doctorfinder">
        <h2>Find your doctor</h2>
      </div>

      <p>Language:</p>
      <hr />

      <input
        onChange={handleChangeInput}
        type="checkbox"
        name="language1"
        id="language1"
        value="russian"
      />
      <label htmlFor="language1"> Russian</label>
      <br></br>
      <input
        onChange={handleChangeInput}
        type="checkbox"
        name="language2"
        id="language2"
        value="english"
      />
      <label htmlFor="language2"> English</label>
      <br></br>
      <input
        onChange={handleChangeInput}
        type="checkbox"
        name="language3"
        id="language3"
        value="arabic"
      />
      <label htmlFor="language3"> Arabic</label>
      <br></br>
      <hr />
      <p>Specialisation:</p>
      <input
        type="checkbox"
        name="specialisation1"
        id="specialisation1"
        value="pediatric"
      />
      <label htmlFor="specialisation1"> Pediatric</label>
      <br></br>
      <input
        type="checkbox"
        name="specialisation2"
        id="specialisation2"
        value="dentist"
      />
      <label htmlFor="specialisation2"> Dentist</label>
      <br></br>
      <input
        type="checkbox"
        name="specialisation3"
        id="specialisation3"
        value="neurologist"
      />
      <label htmlFor="specialisation3"> Neurologist</label>
      <br></br>

      <div className="doctorsList">
        {results.map((doctor) => (
          <Doctor
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            cover={doctor.cover}
            specialisation={doctor.specialisation}
            languagues={doctor.languagues}
            link={doctor.link}
          />
        ))}
      </div>
    </>
  );
};

export default SearchDoctor;
