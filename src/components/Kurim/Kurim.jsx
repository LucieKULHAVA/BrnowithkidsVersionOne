import React from 'react';
import { kurim } from '../../constants/kurim';
import Fotos from './Fotos';
import './style.css';

const Kurim = () => (
  <>
    <h2>Kuřim</h2>
    <div className="kurim__podtitul">
      <p>amazing educational forest path</p>
    </div>
    <div className="trip__wrap">
      <div className="kurim__popis">
        <p>
          For lovers of secrets of forest, games and beautiful views: The
          Educational forest path in Kuřim Follow the description of the journey
          in the post.
        </p>
        <p>
          <span>Distance:</span>
          <span id="highlight"> 2,2 km</span>
        </p>
        <p>
          <span>Duration</span>of the walk with children:{' '}
          <span id="highlight">2-3 hours</span> /included playgrounds and pauses
          for refreshment/
        </p>
        <p>
          <span>Stroller friendly:</span> The way is for prams only, in the
          excellent weather. Count with small hill
        </p>
        <p>
          <span>Map</span>(walk from the railway station):
          <a href="https://mapy.cz/s/gagununoto"> here</a>
        </p>
        <p>
          <span>Playgrounds:</span> The "Nerudova" playground (49.2991022N,
          16.5406022E) The "Tyršova" playground (49.2981758N, 16.5421381E)
        </p>
        <p>
          <span>Open cafe:</span>The <span id="highlight">"Na větvi"</span> cafe
          in the building of the "Kuřim" railway station
        </p>
        <p>
          <span>Getting to the start:</span> By public transport: Take the S3
          train towards Tišnov / Níhov / Žďár nad Sázavou. Destination station
          Kuřim. By car: You can find the nearest car park here - 49.2976619N,
          16.5413819E
        </p>
        <h3>Route description:</h3>
        <p>
          From the car park follow the Brněnská street to the right, circa 100
          metres. Then view the intersection with Janska Street. Here, turn left
          onto Jánská Street and follow the yellow tourist sign. After about 50
          meters, you will come to a water chapel - the chapel of St. Jana.
          Above the chapel, you will see a board with information and two paths.
          One is a yellow sign that leads steeply uphill - DON'T GO THERE.
          Continue from the path to the right along the forest road slightly
          uphill. No worries, the hill is only small, and after a while, the
          straight path begins.
        </p>
        <p>
          Keep going straight until you come across the first wooden sign
          talking about animals. The symbols are beautifully coloured. If you
          keep going directly, the first bird observatory awaits you.{' '}
        </p>
        <p>
          <span id="highlight">How to watch birds? </span>Look through the
          peephole, and you will see the mentioned bird on the tree. On the
          wooden board, you will also find a metal plate with a picture of a
          bird. Take paper and crayons. Place the paper on the board and paint
          quickly on the board with crayons! In a moment, you will have a
          beautiful picture.{' '}
        </p>
        <p>
          In addition to the bird, you will also see the QR code. What about
          him. Download the Lesy ČR application and scan the QR code. You will
          hear the voices of animals and birds. Continue like this from one
          information board to another, still straight. When you reach the well,
          where a game of balls awaits you, here.
        </p>
        <p>
          Follow the "lesní stezka" signs, up the hill. Other bird observatories
          and games for children await you. The last station is at the rest
          area. Paradoxically, it's number one. Here, go down the hill, follow
          the <span id="highlight">"Naučná stezka"</span>signs. You will get
          to.the start of the path.
        </p>
      </div>
    </div>
    <div className="kurim__fotos">
      {kurim.map((foto) => (
        <Fotos key={foto.id} id={foto.id} src={foto.src} />
      ))}
    </div>
  </>
);

export default Kurim;
