import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <p>Skills: {user.skills.join(", ")}</p>
      <p>Availability: {JSON.stringify(user.availability)}</p>
      <a href={user.zoom_link} target="_blank" rel="noopener noreferrer">
        Join Zoom
      </a>
    </div>
  );
};

export default Profile;
