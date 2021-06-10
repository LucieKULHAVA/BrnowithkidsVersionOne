import React from 'react';
import './style.css';

const PublicTransport = () => {
  return (
    <>
      <section className="main__picture">
        <img
          className="children__pic"
          src="/assets/img/travellingImg/childrenPublicTransport.png"
          alt="sanitka"
        />
      </section>
      <div className="publicTransport">
        <div className="main__desc">
          <h2>Travelling with children</h2>
          <p>
            Having kids forces us to make changes to our tried and tested
            routines. And travelling with children is no different. And, like
            most things child-related, you’ll struggle to remember what
            travelling was like before they came along.
          </p>
          <h3>What to pack on a family day out</h3>
          <p>
            Most of us take far too much stuff just leaving the house for a few
            hours with our kids, let alone for a whole holiday. But, though an
            entire industry may want us to think differently, (whisper it) kids
            really don’t need that much stuff. Here are the things we reckon are
            worth making space for.
          </p>
          <h3>Pram</h3>
          <p>
            Even if you’ve got a preschooler who loves to walk, days out can be
            tiring for little ones. Taking a pram will save their legs and give
            them a place to nap without the need to head back to your home.
          </p>
          <h3>Baby carrier</h3>
          <p>
            It could be a long walk from the start of your walk to the final
            destination, so a baby carrier or sling is a must-have until you’re
            reunited with your buggy.
          </p>

          <h3>First Aid Kit</h3>
          <p>
            Children are germ magnets at the best of times, so the chances
            they’ll get sick or injured on a walk aren’t exactly low. A
            well-stocked family first aid kit is a must for your suitcase.
          </p>
          <p>
            <span>What to include in a first aid kit?</span>
          </p>
          <p>
            Paralen and Nurofen come in sachets which are handy for taking out
            and about, while plasters,desinfection (Jodisol), scisors, a
            thermometer, saline nasal drops, and Sudokrem should get you through
            minor health mishaps.
          </p>
        </div>
      </div>
    </>
  );
};

export default PublicTransport;
