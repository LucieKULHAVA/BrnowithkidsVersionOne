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
      <div className="main__desc">
        <div className="cover__photo"></div>
        <div className="doctorfinder">
          <h2>Find your doctor</h2>
          <div id="doctor_desc">
            <p>
              We are aware how difficult it might be to find a doctor speaking
              your language. We selected for you a list of doctors speaking
              different languages. We hope you will be able to find the right
              match for your.
            </p>
            <p>
              You can <span>find a doctor</span> below based on{' '}
              <span>your preferred language</span>:
            </p>
          </div>
        </div>
        <div className="selection">
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language1"
              id="language1"
              value="russian"
            />
            <label htmlFor="language1">English</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language2"
              id="language2"
              value="english"
            />
            <label htmlFor="language2">Russian</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language3"
              id="language3"
              value="arabic"
            />
            <label htmlFor="language3">Arabic</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language4"
              id="language4"
              value="spanish"
            />
            <label htmlFor="language4">Spanish</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language5"
              id="language5"
              value="german"
            />
            <label htmlFor="language5">German</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language6"
              id="language6"
              value="french"
            />
            <label htmlFor="language6">French</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language7"
              id="language7"
              value="polish"
            />
            <label htmlFor="language7">Polish</label>
          </div>
          <br></br>
          <div className="selected__item">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              name="language8"
              id="language8"
              value="serbian"
            />
            <label htmlFor="language8">Serbian</label>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default SearchDoctor;
