import React from 'react';
import { mokraHorakov } from '../../constants/mokraHorakov';
import Fotos from '../Kurim/Fotos';
import './style.css';

const MokraHorakov = () => {
  return (
    <>
      <h2>Mokrá Horákov</h2>
      <div className="kurim__podtitul">
        <p>
          Mokrá - Horákov - small village Brno nearby with perfect playgrounds,
          cute lookout tower, horses and ponies and open cafes.
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
            <span id="highlight"> 3,6 km</span> one way
          </p>
          <p>
            <span>Duration: </span> <span id="highlight">whole day</span>
          </p>
          <p>
            <span>Stroller friendly:</span> <span id="highlight">yes</span>
          </p>
          <p>
            <span>Map:</span>
            <a href="https://en.mapy.cz/s/pezokobunu"> here</a>
          </p>
          <p>
            <span>Playgrounds:</span>
          </p>
          <p>
            The <span id="highlight">"Mokrá Horákov"</span> playground
            (49.2153653N, 16.7489808E)
          </p>
          <p>
            The playground by the <span id="highlight">Mezi stromy cafe </span>
            (49.2186967N, 16.7476825E)
          </p>
          <p>
            <span>Lookout tower: </span>
            49.2231306N, 16.7550414E
          </p>
          <p>
            <span>Open cafe: </span>
          </p>
          <p>
            <span id="highlight">Mezi stromy cafe</span>(49.2186967N,
            16.7476825E)
          </p>
          <p>
            <span id="highlight">VZA Bunkr fast food </span>(49.2081072N,
            16.7280089E)
          </p>
          <p>
            <span>Getting to the start:</span>
          </p>
          <p>
            By public transport: Bus service no. 701 to the bus stop
            Mokrá-Horákov, Horákov More details: <a href="www.idos.cz">here</a>
          </p>
          <p>By car: Parking: 49.2186967N, 16.7476825E</p>
          <h3>Route description</h3>
          <p>
            Mokrá-Horákov is a village that is worth exploring with children.
            Start at the beginning at the bus stop Mokrá Horákov, Horákov. Right
            next to it you will find a sports stadium with{' '}
            <span id="highlight">a beautiful wooden playground</span> (point
            number 2 on the map). We recommend going for a coffee or something
            good to the "Mezi stromy" café (point number three on the map),
            after the playing. There is a small playground too by the cafe.
          </p>
          <p>
            If you want to stay more in the village, you can go from the cafe to
            the local <span id="highlight">lookout tower</span>. It's small, but
            it's worth it. If you would instead go somewhere on a trip in the
            village, be sure not to miss the VZA Bunker. You will find horses
            and pony rides here on Saturdays. You can check the action with the
            horses on the Horses on Bunker link here:{' '}
            <a href="https://www.facebook.com/groups/244728033950803">
              facebook
            </a>
          </p>
          <p>
            In addition, the area is equipped with a giant sandbox. It will also
            attract parents who are lovers of paintball, LARP or army equipment.
            The whole place was a missile base in the past. Today, however, it
            is mainly used to spend free time.
          </p>
          <p>
            On the way to the VZA BUNKR, be sure not to miss the stop at the
            beautiful <span id="highlight">wooden chapel Mitrovských</span>{' '}
            (point 4 on the map). It is a great place to relax.
          </p>
        </div>
      </div>
      <div className="kurim__fotos">
        {mokraHorakov.map((foto) => (
          <Fotos key={foto.id} id={foto.id} src={foto.src} />
        ))}
      </div>
    </>
  );
};

export default MokraHorakov;
