import React from 'react';
import { Profil } from '../../constants/medailonek';

import './style.css';

// const Medailonky = (props) => {

//   const {src, name, homecountry, languages, kids} = props;

//   const medailonkyItems = Profil.map((item) => HeaderMenuItem({ itemUrl: item.url, itemLabel: item.label }));

//   return (
//     <div className="profil">
//         <img
//           className="fotecka"
//           src={src}
//           alt={name}
//         />
//         <div className="info">
//           <h3>{name}</h3>
//           <ol>
//             <li>
//               Homecountry: <span id="info__country">{homecountry}</span>
//             </li>
//             <li>Languages: {languages}</li>
//             <li>{kids}</li>
//           </ol>
//         </div>
//       </div>
//   );
// };

const Medailonky = () => (
  <section className="team intro">
    <h2>Meet our team</h2>
    <div className="team">
      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/katarina.jpg"
          alt="Katarina"
        />
        <div className="info">
          <h3>Katarína</h3>
          <ol>
            <li>
              Homecountry: <span id="info__country">Slovakia</span>
            </li>
            <li>Languages: Slovak, English</li>
            <li>One amazing daughter</li>
          </ol>
        </div>
      </div>

      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/liila.jpg"
          alt="Liila"
        />
        <div className="info">
          <h3>Liila</h3>
          <li>
            Homecountry: <span id="info__country">Estonia</span>
          </li>
          <li>Languages: Estonian, Russian, English</li>
          <li>One amazing daughter</li>
        </div>
      </div>

      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/lucie.jpg"
          alt="Lucie"
        />
        <div className="info">
          <h3>Lucka</h3>
          <li>
            Homecountry: <span id="info__country">Czech republic</span>
          </li>
          <li>Languages: Czech, Slovak, German, Serbian, English</li>
          <li>Two amazing children: daughter and son</li>
        </div>
      </div>

      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/martina.jpg"
          alt="Martina"
        />
        <div className="info">
          <h3>Martina</h3>
          <li>
            Homecountry: <span id="info__country">Czech republic</span>
          </li>
          <li>Languages: Czech, Slovak, German, Russian, English</li>
          <li>Two amazing children: daughter and son</li>
        </div>
      </div>

      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/milena.jpg"
          alt="Milena"
        />
        <div className="info">
          <h3>Milena</h3>
          <li>
            Homecountry: <span id="info__country">Poland</span>
          </li>
          <li>Languages: Polish, French, English</li>
          <li>Two amazing daughters</li>
        </div>
      </div>

      <div className="profil">
        <img
          className="fotecka"
          src="/assets/medailonky/images/anna.jpg"
          alt="Anna"
        />
        <div className="info">
          <h3>Anna</h3>
          <li>
            Homecountry: <span id="info__country">Ukraine</span>
          </li>
          <li>Languages: Ukrainian, English, Lithuanian, Russian</li>
          <li>One amazing son</li>
        </div>
      </div>
    </div>
  </section>
);

export default Medailonky;
