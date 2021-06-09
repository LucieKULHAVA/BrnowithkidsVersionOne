import React from 'react';
import Medailonky from './Medailonky';
import WhatWeDo from './WhatWeDo';
import FuturePlan from './FuturePlan';
import { Profil } from '../../constants/medailonek';
import { WhatWeDoList } from '../../constants/whatWeDo';
import { FuturePlanList } from '../../constants/futurePlan';

import './style.css';

const MainPage = () => (
  <main className="container">
    <section className="main__picture">
      <img
        className="main__pic"
        src="/assets/img/coverPic.jpg"
        alt="picture of family in the nature"
      />
    </section>
    <section className="main__desc">
      <h2>Who we are</h2>
      <p>
        We are a group of parents from NGO Vicinis, who organise events and
        workshops for families in Brno, primarily but not exclusively
        English-speaking. We want to spend time with other parents and whether
        you are a native speaker or complete beginner, everyone is welcome. Our
        work is voluntary and we try to keep the cost of events to a minimum.
      </p>
      <h2>What we do</h2>
      <ul>
        {WhatWeDoList.map((seznam) => (
          <WhatWeDo
            key={seznam.activities}
            src={seznam.src}
            activities={seznam.activities}
          />
        ))}
      </ul>
      <h2>What are we planning for the future?</h2>
      <ul>
        {FuturePlanList.map((seznam) => (
          <FuturePlan
            key={seznam.activities}
            src={seznam.src}
            activities={seznam.activities}
          />
        ))}
      </ul>
      <p>Looking forward to seeing you!</p>
      <p>The team of organisers</p>
    </section>
    <section className="team__intro">
      <h2>Meet our team</h2>
      <div className="team">
        {Profil.map((profile) => (
          <Medailonky
            key={profile.name}
            src={profile.src}
            name={profile.name}
            homecountry={profile.homecountry}
            languages={profile.languages}
            kids={profile.kids}
          />
        ))}
      </div>
    </section>
  </main>
);

export default MainPage;
