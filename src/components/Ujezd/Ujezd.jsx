import React from 'react';
import { ujezd } from '../../constants/ujezd';
import Fotos from '../Kurim/Fotos';
import './style.css';

const Ujezd = () => (
  <>
    <h2>Újezd u Brna</h2>
    <div className="kurim__podtitul">
      <p>amazing educational forest path</p>
    </div>
    <div className="trip__wrap">
      <div className="kurim__popis">
        <p>
          Are you bored of playgrounds in Brno? Discover with us a new
          playground in Újezd ​​u Brna. This time we recommend a scooter with
          you.
        </p>
        <p>
          <span>Distance:</span>
          <span id="highlight"> 3,1 km</span>
        </p>
        <p>
          <span>Duration</span> of the walk with children:{' '}
          <span id="highlight">5-6 hours</span> /included playgrounds, farm, and
          pauses for refreshment/
        </p>
        <p>
          <span>Stroller friendly:</span> <span id="highlight">yes</span>
        </p>
        <p>
          <span>Map:</span>
          <a href="https://mapy.cz/s/jozetojuco"> here</a>
        </p>
        <p>
          <span>Playgrounds:</span> The "Rozprýmova" playground The "Na
          zahrádkách" playground
        </p>
        <p>
          <span>Open cafe:</span> <span id="highlight">Cukrárna</span> at the
          main square (49.1046944N, 16.7571336E)
        </p>
        <p>
          <span>Getting to the start:</span> By public transport: By train to
          the train stop "Újezd u Brna". By buses (no. 40, 151) to the bus stop
          "Újezd u Brna, Revoluční"
        </p>
        <p>More details and timetables: public transport (MHD) www.idos.cz</p>
        <h3>Route description:</h3>
        <p>
          After getting off the bus (stop "Újezd ​​u Brna, Revoluční") or train
          (stop Újezd ​​u Brna), turn right from the main road along Revoluční
          Street. Almost at the end of the street, you will come across the
          street "9. května". Turn onto this street. At the end of the road, you
          will see giant spruce. And with it, you will find the first
          playground.{' '}
        </p>
        <p>
          It is called the <span id="highlight">Bird Village</span>. The
          climbing frames are in the shape of birdhouses, and the course
          resembles the Angry Birds series. In addition to the classic climbing
          frames, there is also a trampoline, rope obstacles or a sensory trail.
          You can spend the whole day here.
        </p>
        <p>
          {' '}
          If you want to get to one more playground, try it in{' '}
          <span id="highlight">Na Zahrádkách</span>
          Street. This time it's about the sea, ships, sailors. It is smaller
          than a bird village and more suitable for more minor children. Even
          so, it's great. And if you need to walk even more around the village,
          don't forget to visit the farm. We posted the information about the "U
          Staré Hory" farm on our Facebook. You can use service no. 610 from the
          "Újezd u Brna,Rychmanov" bus stop (49.1035119N, 16.7652989E) for a way
          back to Brno.
        </p>
      </div>
    </div>
    <div className="kurim__fotos">
      {ujezd.map((foto) => (
        <Fotos id={foto.id} src={foto.src} />
      ))}
    </div>
  </>
);

export default Ujezd;
