import React from 'react';
import { dinopark } from '../../constants/dinopark';
import Fotos from '../Kurim/Fotos';
import './style.css';

const Dinopark = () => {
  return (
    <>
      <h2>Dinopark and ZOO Vyškov</h2>
      <div className="kurim__podtitul">
        <p>childrens playgrounds, ZOO and Dinopark</p>
      </div>
      <div className="trip__wrap">
        <div className="kurim__popis">
          <p>
            DinoPark and ZOO PARK Vyskov represent an ideal combination to get
            information about long-extinct Mesozoic giants and about fauna at
            present focusing on local domestic animals. So let´s go!
          </p>
          <p>
            <span>Getting to the start:</span>
          </p>
          <p>
            By train or by bus to the Vyškov na Moravě train stop. The
            information about transport connection -{' '}
            <a href="www.idos.cz.">www.idos.cz</a>
          </p>
          <p>
            <span>By car:</span>
          </p>
          <p>Parking - 49.2727336N, 16.9962642E (usually very crowded)</p>
          <p>Parking by Kaufland store - 49.2747611N, 16.9948978E</p>
          <h3>Route description:</h3>
          <p>
            On foot from the train station we gonna follow streets
            „Brněnská“–„Hřbitovní“–„Cukrovarská“ to the main entrance to ZOO. It
            is approx. 950 metres. The map of the access from the bus or train
            station, you can find{' '}
            <a hre="https://mapy.cz/s/mokobozaca">here.</a>
          </p>
          <p>
            {' '}
            <span>Playgrounds:</span> You can find many playgrounds inside the
            Zoo or Dinopark.
          </p>
          <p>
            <span>Open cafe:</span> Inside of the ZOO and Dinopark you can buy
            just fast food meals (frites, hot dogs etc.) Unfortunately nothing
            healthy for children. So recomended bigger snack and big bottle of
            water!
          </p>
          <p>
            <span>Tickets:</span> Highly reccomend buy the tickets online in
            advance via <a href="https://eshop.zoo-vyskov.cz">eshop</a>
          </p>
          <p>
            For ZOO nad Dinopark you need to buy: Vstupenka ZOO a Dinopark –
            dospělý <span id="highlight">(adult ticket)</span> – CZK 224 And
            Vstupenka ZOO a Dinopark – dítě/studenti/duchodci{' '}
            <span id="highlight">(child´s ticket)</span> – CZK 154
          </p>
          <h3>Description</h3>
          <p>
            DinoPark and ZOO PARK Vyskov represent an ideal combination to get
            information about long-extinct Mesozoic giants and about fauna at
            present focusing on local domestic animals. DinoPark Vyskov is
            located in a picturesque forest park on the outskirts Vyskov, and
            dinosaurs literally fell in love with the environment. Dozens of
            life-size models, absolutely unique hanging cableway called DinoBike
            that will let you see DinoPark from bird´s eye view; and a list of
            attractions is just beginning, come and see. A unique road train
            DinoExpress will transport you to zoopark and back for free.
          </p>
          <p>
            But the area is not only Dinopark. You can spent a half day in the
            <span id="highlight"> ZOO PARK</span> with lot of house animals. The
            ZOO PARK is great for smaller visitors and can be more interesting
            than the Dinopark for them.
          </p>
          <p>
            The Dinopark highly recomended for the older children. The access to
            the Dinopark is only via DinoTrain from the ZOO Park.{' '}
          </p>
          <p>
            More details at the{' '}
            <a href="https://www.dinopark.eu/en/vyskov">website.</a>
          </p>
        </div>
      </div>
      <div className="kurim__fotos">
        {dinopark.map((foto) => (
          <Fotos key={foto.id} id={foto.id} src={foto.src} />
        ))}
      </div>
    </>
  );
};

export default Dinopark;
