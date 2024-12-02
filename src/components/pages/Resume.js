import React from 'react';
import resumeOne from '../assets/images/Resume2024.pdf';
import '../assets/styles/style.css'; // Ensure this path is correct

export default function Resume() {
  return (
    <div className="resume-container">
      <iframe src={resumeOne} className="resume-iframe"></iframe>
    </div>
  );
}
