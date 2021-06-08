import React from 'react';
import './style.css';

const KinderGarten = () => {
  return (
    <>
      <div className="main__desc">
        <div className="cover__photo--bike"></div>
        <h2>How do you enroll your child in Kindergarten</h2>
        <p>
          Most children enter public kindergarten at age three. Prechool
          facilities for children younger than three are available too, but
          mostly private kindergartens/nursery/children´s group.
        </p>
        <p>
          The preschool attendance is mandatory for all children who reach age
          five till August, 31st. This means that children residing in the Czech
          Republic (in length exceeding 90 days) shall complete at least one
          year of preschool education before commencing the mandatory elementary
          school attendance. But please note, this rule you can fill via
          homeschooling too.
        </p>
        <p>
          The tutorial how to enroll your child into the kindergarten you can
          download <a href="">here</a>.
        </p>
        <h3>What preschool facilities are in Brno?</h3>
        <ul>
          <li>Public kindergarten (Státní mateřská škola)</li>
          <li>
            Private kindergarten/nursery (Soukromá mateřská škola/jesličky)
          </li>
          <li>Forest kindergarten (Lesní školka)</li>
          <li>Forest club (Lesní klub)</li>
          <li>Children´s group (Dětská skupina)</li>
        </ul>
        <h3>What is the difference between public and private kindergarten?</h3>
        <p>
          Every school district in Brno has a state run kindergarten catering to
          children residing in the catchment area. While most expats usually
          don't consider public kindergartens as a viable option due to the
          language barrier, especially those on a tight budget would appreciate
          the lower costs - around CZK 400-500/per month/per child. The price
          for private kindergarten is much bigger. The cheapest kindergartens in
          Brno you can find around CZK 6500/per month, and the most expensive
          around CZK 12000/per month Public kindergartens operate under the
          supervision of the Ministry of Education. The current legislation
          allows for preschool classrooms to accommodate up to 28 children aged
          3 to 6 per teacher. So this is the big disadvantage of public
          kindergartens. The classrooms of the private kindergartens have less
          children - around 15. Numerous childcare private facilities operate
          businesses resembling and acting as kindergartens, without holding the
          license and relying on the fact that non-Czechs won't know the
          difference. Make sure to inquire about the preschool's legal status
          before enrolling your child.
        </p>
        <h3>What is forest kindergarten or forest club?</h3>
        <p>
          Forrest kindergartens provide a unique educational concept outdoors. A
          certified forest kindergarten provides children with full-fledged
          preschool preparation while following the Framework Curriculum
          Program. Children here obtain their knowledge while closely observing
          nature. Their stay outside turns from free play to a lifestyle. The
          terminology might be confusing, but the forest school concept can be
          brought into an urban area and is not solely dependent on the presence
          of an actual forest.
        </p>
        <h3>How does the children´s group work?</h3>
        <p>
          "Dětská skupina" is a facility providing childcare for children aged 1
          to 6. While the children group is subject to slightly lower demands in
          terms of inner spacing and garden (not mandatory), there are stricter
          conditions on occupancy - 6 children per teacher.
        </p>
        <p>
          The biggest advantages of children groups are the size, family
          atmosphere and individual approach to the needs of children. The staff
          members have to be either a qualified teacher, child nurse, social
          worker or a certified nanny.
        </p>
      </div>
    </>
  );
};

export default KinderGarten;
