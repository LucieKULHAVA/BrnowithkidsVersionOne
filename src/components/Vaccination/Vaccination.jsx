import React from 'react';
import './style.css';
import VaccinationForWhom from './VaccinationForWhom';
import { VaccinationForWhomList } from '../../constants/vaccinationForWhom';
import { VaccinationTable1 } from '../../constants/vaccinationTable1';
import { VaccinationTable2 } from '../../constants/vaccinationTable2';
import VaccinationTable from './VaccinationTable';

const Vaccination = () => {
  return (
    <>
      <div className="main__desc">
        <div className="cover__photo"></div>
        <h2>Vaccination in the Czech Republic</h2>
        <p>
          Regular, special and emergency vaccinations against infectious
          diseases are provided to insured persons under the obligation of such
          persons to accept needed care. Vaccinations are provided
          free-of-charge.
        </p>
        <p>
          The obligation to allow oneself to be vaccinated applies to the
          following persons:
        </p>
        <ul>
          {VaccinationForWhomList.map((seznam) => (
            <VaccinationForWhom
              key={seznam.activities}
              src={seznam.src}
              activities={seznam.activities}
            />
          ))}
        </ul>
        <h2>Mandatory for attending a nursery</h2>
        <p>
          Children can only attend a nursery or preschool if they have received
          the required regular vaccinations, have evidence of immunity against a
          particular disease or evidence that they cannot be vaccinated due to a
          permanent contraindication (a prohibition against vaccination for
          health reasons).
        </p>
        <p>
          Legitimate vaccination is fully covered by the state. In the context
          of compulsory vaccination, you can use a different vaccine endorsed by
          the Ministry of Health (in accordance with section 47 of Act No.
          258/2000 concerning the protection of public health). This vaccine
          must be registered in the Czech Republic and then paid for by a
          parent.
        </p>
        <p>
          In case of premature babies, primary vaccination by hexavalent vaccine
          is done by Infanrix hexa at 3+1 scheme
        </p>
      </div>
      <section className="table">
        <div className="table__scheme">
          <h3>Legitimate vaccination</h3>
          <table>
            <VaccinationTable data={VaccinationTable1} />
          </table>
        </div>
        <div className="table__scheme">
          <h3>Recommended vaccination</h3>
          <table>
            <VaccinationTable data={VaccinationTable2} />
          </table>
        </div>
      </section>
    </>
  );
};

export default Vaccination;
