import React from 'react';
import me from '../assets/images/me.jpg';
import mountain from '../assets/images/MountainTop.jpg';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCat } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className={styles.aboutMe}>
      <img className={styles.myPic} src={me} alt="Me" />
      <div className={styles.aboutMeContainer}>
        <h1>A little about myself...</h1>
        <div>
          <ul>
            <li> First off my name is ... Brendan Morrissey</li>
            <li>🔭 I’m currently working on ... <a href='https://www.linkedin.com/in/brendan-morrissey-663468158/'><FontAwesomeIcon icon={faLinkedin} /> Getting My Degree!</a></li>
            <li>🌱 I’m currently learning ... Java & AWS</li>
            <li>💹 Proficient in ... HTML, CSS, Javascript</li>
            <li>💹 Additional Tools - GraphQL, React, Bootstrap, etc.</li>
            <li>💬 Ask me about ... My Cat <FontAwesomeIcon icon={faCat} /></li>
            <li>📫 How to reach me: <FontAwesomeIcon icon={faEnvelope} /> brendanmorrissey34@gmail.com</li>
            <li>⚡ Fun fact: ... I love to hike and backpack!</li>
            <li>💻 Github URL ... <a href='https://github.com/Bmorrissey34'><FontAwesomeIcon icon={faGithub} /> [[💻]]</a></li>
          </ul>
        </div>
      </div>
      <img className={styles.jumbotron} src={mountain} alt="Mountain Top" />
    </div>
  );
}