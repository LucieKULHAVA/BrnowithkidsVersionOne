import React from 'react';
import './style.css';

const Highschool = () => {
  return (
    <>
      <section className="main__picture">
        <img
          className="highschool__pic"
          src="/assets/img/educationImg/highschool.jpg"
          alt="děti na střední škole"
        />
      </section>
      <div className="highschool">
        <div className="main__desc">
          <h2>Highschool system</h2>
          <p>
            Secondary education usually lasts for 4 years and at grammar and
            specialised schools it is finished with a school-leaving examination
            which is required by all universities and colleges. This examination
            is taken in four subjects at grammar schools (Czech, a foreign
            language and two optional subjects chosen from foreign languages,
            science subjects or humanities) and in five or more subjects at
            specialised schools.
          </p>
          <p>
            The examination is held in May and is mostly oral except Czech
            language in which an <span>essay is written</span> about a month
            before.{' '}
            <span>The oral part of the exam takes about two hours,</span> half
            an hour for each subject. A student chooses one of 25 to 30 topics
            by drawing a number and after 15 minutes' preparation he/she speaks
            on the topic and solves given tasks.{' '}
          </p>
          <p>
            After the graduates have passed their school-leaving exam they
            receive the <span>School-Leaving Certificate</span> and they can
            apply for study at universities and colleges.
          </p>
          <div className="highschoolList">
            <p>
              At the age of 15 pupils can choose among a{' '}
              <span>variety of secondary schools:</span>
            </p>
            <ul>
              <li>
                <img
                  className="sipka"
                  src="/assets/icons/sipkafinal.jpg"
                  alt="šipka"
                />
                grammar schools with general and rather academic education which
                prepare students for university study,
              </li>
              <li>
                <img
                  className="sipka"
                  src="/assets/icons/sipkafinal.jpg"
                  alt="šipka"
                />
                <span>
                  special schools which include technical colleges, specialised
                  in building, chemistry, engineering etc., business academies,
                  agricultural schools, nursing schools, music and art schools
                  which offer professional education
                </span>
              </li>
              <li>
                <img
                  className="sipka"
                  src="/assets/icons/sipkafinal.jpg"
                  alt="šipka"
                />
                vocational schools training would-be workers for practical jobs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highschool;
