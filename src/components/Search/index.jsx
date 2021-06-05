import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import FamilyDayOut from './DaysOut/index';
import { DayOut } from './daysout';
import SearchBar from './SearchBar/searchbar';
import Fuse from 'fuse.js';

const App = () => {
  const [tripResult, setTripResult] = useState(DayOut);
  const searchNazev = (pattern) => {
    if (!pattern) {
      // nic se nenaslo, koncim vyhledavani
      return;
    }
    
    const fuse = new Fuse(tripResult, {
      keys: ["nazev"],
    });
    
    const result = fuse.search(pattern);
 
    const matches = [];
    if (!result.length) {
      setTripResult([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setTripResult(matches);
   }
  };
 
    return (
       <>  
      <h1 className="Title">My Favorite Destination</h1>
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
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
