import React from "react";
import './Studyaboard.css';
import abroad1 from '../../assests/abroad1.jpg';
import abroad2 from '../../assests/abroad2.jpg';
import abroad3 from '../../assests/abroad3.jpg';
import abroad4 from '../../assests/aboard4.jpg';

const StudyAbroadPrograms = () => {
  const programs = [
    {
      title: "Skilled Labor Services",
      image: abroad1,
    },
    {
      title: "Unskilled Labor Services",
      image: abroad2,
    },
    {
      title: "Visa & Travel Assistance",
      image: abroad3,	
    },
    {
      title: "Job Search & Placement",
      image: abroad4,
    },
  ];

  return (
    <div className="programs-container">
      <h1 className="title">Study Abroad Programs</h1>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
          </div>
        ))}
      </div>
      <button className="enquiry-button">Enquiry Now</button>
    </div>
  );
};

export default StudyAbroadPrograms;
