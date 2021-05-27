import React from 'react';
import Medailonky from './Medailonky';

import './style.css';

const MainPage = () => (
  <main className="container">
    <section className="main__picture">
      <img
        className="main__pic"
        src="/assets/img/cover photo.jpg"
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
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Family hikes</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Parenting meetups</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">BodyArt training for mums</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Couses and DIY workshops</span>
        </li>
      </ul>
      <h2>What are we planning for the future?</h2>
      <ul>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Lactation counselling</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Artetherapy workshops</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Parental support meetings</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">
            Courses of Czech language for parents on parental leave (together
            with your baby)
          </span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">Course of first aid in children</span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">
            Culinary workshops for parents on parental leave(inspiration &
            shared lunches)
          </span>
        </li>
        <li>
          <img
            className="sipka"
            src="/assets/icons/sipkafinal.jpg"
            alt="šipka"
          />
          <span className="activities">And more...</span>
        </li>
      </ul>
      <p>Looking forward to seeing you!</p>
      <p>The team of organisers</p>
    </section>
    <Medailonky />
  </main>
);

export default MainPage;
