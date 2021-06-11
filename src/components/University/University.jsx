import React from 'react';
import './style.css';

const University = () => {
  return (
    <>
      <div className="universities">
        <div className="main__desc">
          <div className="cover__photo--uni"></div>
          <h2>UNIVERSITIES</h2>
          <p>
            Are you lost in all the information about your stay abroad at any
            university in the Czech Republic? Are you confused by the university
            system, the choice of courses and filling in the complicated forms?
          </p>
          <p>
            There are basically 2 types of universities in the Czech Republic -
            <span>public</span> and <span>private</span>. Below you can check
            the list of all universities in Brno.{' '}
          </p>
          <h2>Public Universities</h2>
          <div className="privateUnis">
            <div className="privateUni">
              <h3>Masaryk University</h3>
              <p>Komenského nám. 2, Brno 602 00</p>
              <p>
                <a href="https://czs.muni.cz/en/student-from-abroad/international-student-guide ">
                  More details
                </a>
              </p>
            </div>
            <div className="privateUni">
              <h3>Mendel University</h3>
              <p>Zemědělská 1/1665, 613 00 Brno</p>
              <p>
                <a href="https://mendelu.cz/en/">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>Brno University of Technology</h3>
              <p>Antonínská 548/1, 601 90 Brno</p>
              <p>
                <a href="https://www.vutbr.cz/en/?aid_redir=1">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>University of Veterinary Sciences Brno</h3>
              <p>Palackého třída 1/3, 612 42 Brno</p>
              <p>
                <a href="https://www.vfu.cz/en/">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>The Janáček Academy of Music and Performing Arts</h3>
              <p>Beethovenova 2, 602 00 Brno</p>
              <p>
                <a href="https://www.jamu.cz/international/international-office/about-jamu/">
                  More details
                </a>
              </p>
            </div>
            <div className="privateUni">
              <h3>Univerzita obrany</h3>
              <p>Kounicova 65, 662 10 Brno</p>
              <p>
                <a href="http://www.unob.cz">More details</a>
              </p>
            </div>
          </div>
          <h2>Private facilities</h2>
          <div className="privateUnis">
            <div className="privateUni">
              <h3>NEWTON College, a.s.</h3>
              <p>Rašínova 2, 602 00 Brno</p>
              <p>
                <a href="http://www.newtoncollege.cz">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>Akademie STING, o.p.s.</h3>
              <p>Stromovka 1, 637 00 Brno</p>
              <p>
                <a href="http://www.sting.cz ">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>Vysoká škola obchodní a hotelová, s.r.o.</h3>
              <p>Bosonožská 9, 625 00 Brno</p>
              <p>
                <a href="http://www.hotskolabrno.cz">More details</a>
              </p>
            </div>
            <div className="privateUni">
              <h3>VŠ regionálního rozvoje a Bankovní institut – AMBIS</h3>
              <p>Mezírka 775/1, 602 00 Brno – střed</p>
              <p>
                <a href="www.ambis.cz">More details</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default University;
