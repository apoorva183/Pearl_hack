import React from "react";

const MatchCard = ({ name, skills, zoomLink }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Skills: {skills.join(", ")}</p>
      <a href={zoomLink} target="_blank" rel="noopener noreferrer">
        Join Zoom
      </a>
    </div>
  );
};

export default MatchCard;
