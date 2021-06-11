import React, { useState } from 'react';
import './style.css';
import FamilyDayOut from '../DaysOut/index';
import { DayOut } from '../../constants/daysout';
import SearchBar from '../SearchBar/searchbar';
import Fuse from 'fuse.js';

const Search = () => {
  const [tripResult, setTripResult] = useState(DayOut);
  const searchNazev = (pattern) => {
    if (!pattern) {
      setTripResult(DayOut);
      return;
    }

    const fuse = new Fuse(tripResult, {
      keys: ['nazev'],
    });

    const result = fuse.search(pattern);

    const matches = [];
    if (!result.length) {
      setTripResult([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setTripResult(matches);
    }
  };

  return (
    <>
      <main id="container">
        <section className="main__picture">
          <img
            className="main__pic"
            src="/assets/img/coverPic.jpg"
            alt="picture of family in the nature"
          />
        </section>
        <div className="daysOut">
          <h2>Family days out</h2>
        </div>
        {/* <p>
          What to see and to do with your kids? We have some great tips for you,
          just have a look below:
        </p> */}
        <SearchBar
          placeholder="Enter the name of your favorite destination"
          onChange={(e) => searchNazev(e.target.value)}
        />

        <div className="vylety">
          {tripResult.map((trip) => (
            <FamilyDayOut
              key={trip.nazev}
              id={trip.id}
              nazev={trip.nazev}
              tripPodtitul={trip.tripPodtitul}
              stroller={trip.stroller}
              distance={trip.distance}
              popis={trip.popis}
              foto={trip.foto}
              url={trip.url}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Search;
