import React from 'react';
import { zidlochovice } from '../../constants/zidlochovice';
import Fotos from '../Kurim/Fotos';
import './style.css';

const Zidlochovice = () => {
  return (
    <>
      <h2>Židlochovice</h2>
      <div className="kurim__podtitul">
        <p>
          a paradise of children playgrounds, a park with mouflons and a
          beautiful lookout tower the Acacia Tower
        </p>
      </div>
      <div className="trip__wrap">
        <div className="kurim__popis">
          <p>
            The town of Židlochovice - a paradise for children's playgrounds, a
            park with mouflons and a beautiful lookout tower - the "Acacia
            Tower".{' '}
          </p>
          <p>
            <span>Distance:</span>
            <span id="highlight"> 7,8 km</span>
          </p>
          <p>
            <span>Duration: </span>of the walk with children:{' '}
            <span id="highlight">5-6 hours</span> /included playgrounds and
            pauses for refreshment/
          </p>
          <p>
            <span>Stroller friendly:</span> In the Židlochovice city. The way to
            the lookout tower is uphill, passable with a pram, for more sporty
            parents.
          </p>
          <p>
            <span>Map:</span>
            <a href="https://mapy.cz/s/jahonerofe"> here</a>
          </p>
          <p>
            <span>Playgrounds:</span>
          </p>
          <p>
            The <span id="highlight">"Robertova vila"</span> playground
            (49.0325317N, 16.6156044E)
          </p>
          <p>
            The <span id="highlight">"Družba"</span> playground (49.0392272N,
            16.6170986E)
          </p>
          <p>
            <span>Lookout tower: </span>
            <span id="highlight">The Výhon</span> lookout tower (49.0418314N,
            16.6390458E)
          </p>
          <p>
            <span>Getting to the start:</span>
          </p>
          <p>
            {' '}
            By public transport: By train to the terminus "Židlochovice". From
            the railway stations "Brno-Královo Pole, Brno-Lesná, Brno-Židenice,
            Brno-Hlavní nádraží." More information{' '}
            <a href="www.idos.cz">here.</a>
          </p>
          <p>
            <span>By car: </span>Parking is possible in front of railway station
            in Židlochovice. (49.0331672N, 16.6179294E)
          </p>
          <h3>Route description:</h3>
          <p>
            You will see a gate and behind it a children's playground at
            "Robertova vila", we recommend starting here from the train station.
            From the playground, then return to the station and cross the road
            at the end of the tracks. You will reach a sidewalk along the river.
            Follow it to the left of the station towards the high chimney. He
            cannot be overlooked.
          </p>
          <p>
            From the chimney, you will see the local castle. It is not
            accessible, but you will find a large field with mouflons. Access to
            the park is the gateway to the Penny's Store. The garden is
            beautiful and worth a visit.
          </p>
          <p>
            From the park then continue to the many playgrounds on the street
            "Družba", they are hidden between the houses but explore them. From
            the playgrounds, we recommend going back to the main square. You
            will find the court just behind the big bridge. At its upper end,
            you will see the town hall. Right next to it is an excellent bakery
            where you can buy coffee and tortillas. At the same time, a green
            tourist sign starts at the bakery. If you follow it towards the
            church and further up the hills, you will reach a lookout tower
            called the <span id="highlight">Acacia Tower.</span>{' '}
          </p>
          <p>
            On the tourist signpost, the lookout tower is marked under the name
            "Výhon". The journey to the Acacia Tower / "Výhon" lookout tower
            takes about 40 minutes. Distance from the square is 2 km. It leads
            through a beautiful landscape with unique forests and statues in the
            countryside.
          </p>
        </div>
      </div>
      <div className="kurim__fotos">
        {zidlochovice.map((foto) => (
          <Fotos key={foto.id} id={foto.id} src={foto.src} />
        ))}
      </div>
    </>
  );
};

export default Zidlochovice;
