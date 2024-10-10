
import React from 'react';
import mountain from '../assets/images/MountainTop.jpg';
import me from '../assets/images/me.jpg';

export default function About() {
  return (
    <div className='aboutMe'>
      <img className='myPic' src={me} alt="Me" />
      <div className="aboutMeContainer">
        <h1>A little about myself...</h1>
        <div>
          <ul>
            <li> First off my name is ... Brendan Morrissey</li>
            <li>🔭 I’m currently working on ... <a href='https://www.linkedin.com/in/brendan-morrissey-663468158/'>Getting My Degree!</a></li>
            <li>🌱 I’m currently learning ... Java & AWS</li>
            <li>💹 Proficient in ... HTML, CSS, Javascript</li>
            <li>💹 Additional Tools - GraphQL, React, Bootstrap, etc.</li>
            <li>💬 Ask me about ... My Cat 🐈</li>
            <li>📫 How to reach me: brendanmorrissey34@gmail.com</li>
            <li>⚡ Fun fact: ... I love to hike and backpack!</li>
            <li>💻 Github URL ... <a href='https://github.com/Bmorrissey34'>[[💻]]</a></li>
          </ul>
        </div>
      </div>
      <img className='jumbotron' src={mountain} alt="Mountain Top" />
    </div>
  );
}
