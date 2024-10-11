import React from 'react';
import '../assets/styles/style.css';
import employeeTracker from '../assets/images/Employee Tracker.PNG';
import noteTaker from '../assets/images/NOTE TAKER.png';
import project from '../assets/images/Screenshot 2021-10-19 135921.png';
import techNews from '../assets/images/techNews.PNG';
import anitime from '../assets/images/Ani-time_Project.PNG';
import ecommerceBackend from '../assets/images/E-Commerce-Backend.png';
import weatherDashboard from '../assets/images/Weather-Dashboard.png';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Tech News Java API',
      image: techNews,
      repoLink: 'https://github.com/Bmorrissey34/tech-news-java-api',
      liveLink: 'https://tech-java-api.herokuapp.com/'
    },
    {
      id: 2,
      title: 'Ani-Time Project',
      image: anitime,
      repoLink: 'https://github.com/baylorhinshaw/Ani-Time'
    },
    {
      id: 3,
      title: 'Ratings App',
      image: project,
      repoLink: 'https://github.com/Bmorrissey34/Movies-TV-Search',
      liveLink: 'https://bmorrissey34.github.io/Movies-TV-Search/'
    },
    {
      id: 4,
      title: 'Employee Tracker',
      image: employeeTracker,
      repoLink: 'https://github.com/Bmorrissey34/Employee-Tracker'
    },
    {
      id: 5,
      title: 'Note-Taker',
      image: noteTaker,
      repoLink: 'https://github.com/Bmorrissey34/Note-Taker'
    },
    {
      id: 6,
      title: 'E-Commerce Backend',
      image: ecommerceBackend,
      repoLink: 'https://github.com/Bmorrissey34/E-Commerce-Backend'
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      image: weatherDashboard,
      repoLink: 'https://github.com/Bmorrissey34/Weather-Dashboard'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {projects.map(({ id, title, image, repoLink, liveLink }) => (
          <div className="col-md-6 col-lg-4 mb-4" key={id}>
            <div className="project-card">
              <div className="project-image">
                <img className="img-fluid" src={image} alt={title} />
              </div>
              <div className="project-details">
                <h3>{title}</h3>
                <div className="links">
                  {liveLink && (
                    <a href={liveLink} className="btn btn-primary">Live Demo</a>
                  )}
                  <a href={repoLink} className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
