import React from 'react';
import './style.css';

const BikeBus = () => {
  return (
    <>
      <section className="main__picture">
        <img
          className="bike__pic"
          src="/assets/img/travellingImg/bikeBus.jpg"
          alt="cestování s kolem v autobuse"
        />
      </section>
      <div className="bikeBus">
        <div className="main__desc">
          <h2>Travelling with a bicycle</h2>
          <p>
            Transport of a bicycle in the means of the Brno Public Transport is
            not complicated at all. Quite the contrary – the possibilities of
            travelling with a bicycle have significantly expanded in recent
            years and you can take a bicycle with yourself to all kinds of
            public transport, except for buses. By enabling the transport of
            bicycles, the public transport helps overcome less safe sections in
            busy city streets, or elevation, or makes healthy cycling easier
            even for less proficient cyclists.
          </p>
          <p>
            Specific opportunities for travelling by the Public Transport with a
            bicycle are, for the individual types of the means of transport,
            listed below. At the same time, at each boarding, please remember
            that transport of a bicycle is subject to the rules set out in the
            documents here.
          </p>
        </div>
      </div>
    </>
  );
};

export default BikeBus;
