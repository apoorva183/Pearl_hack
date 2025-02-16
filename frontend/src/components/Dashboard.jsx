// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import "./Dashboard.css"; // Ensure this CSS file exists

// const Dashboard = () => {
//   const [query, setQuery] = useState("");
//   const [users, setUsers] = useState([]);
//   const [matchedUsers, setMatchedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const querySnapshot = await getDocs(collection(db, "users"));
//       const usersList = querySnapshot.docs.map((doc) => doc.data());
//       setUsers(usersList);
//     };
//     fetchUsers();
//   }, []);

//   const handleSearch = () => {
//     if (!query.trim()) return;

//     const matchedUsers = users.filter((user) =>
//       user.skills && user.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()))
//     );
//     setMatchedUsers(matchedUsers);
//   };

//   const handleEmail = (email, name) => {
//     const subject = `Study Partner Request - ${name}`;
//     const body = `Hello ${name},\n\nI am interested in collaborating on a study project with you. Let's discuss more!\n\nBest regards.`;
    
//     // URL encode the subject and body
//     const encodedSubject = encodeURIComponent(subject);
//     const encodedBody = encodeURIComponent(body);

//     // Construct the mailto link
//     const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    
//     // Open the default email client using the constructed mailto link
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Find Study Partners</h2>
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter a skill..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//       </div>

//       <div className="users-container">
//         {matchedUsers.length > 0 ? (
//           matchedUsers.map((user, index) => (
//             <div key={index} className="user-card">
//               <h3 className="user-name">{user.name}</h3>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
//               <p><strong>Research Work:</strong> {user.researchWork}</p>

//               <p><strong>Availability:</strong> {user.availability ? `${user.availability.day} (${user.availability.from} to ${user.availability.to})` : "N/A"}</p>
//               <p><strong>Education:</strong> {user.education} - {user.currentYear}</p>

//               <div className="user-info">
//                 <p><strong>Note:</strong> {user.notes || "No notes available"}</p>
//               </div>

//               {/* Send Email Button */}
//               <button
//                 className="zoom-button"
//                 onClick={() => handleEmail(user.email, user.name)}
//               >
//                 Send Email
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No matches found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import "./Dashboard.css"; 

// import StudyBuddyLogo from "../assets/studybuddy_logo.png"; // Ensure you have a logo in /assets folder

// const Dashboard = () => {
//   const [query, setQuery] = useState("");
//   const [users, setUsers] = useState([]);
//   const [matchedUsers, setMatchedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const querySnapshot = await getDocs(collection(db, "users"));
//       const usersList = querySnapshot.docs.map((doc) => doc.data());
//       setUsers(usersList);
//     };
//     fetchUsers();
//   }, []);

//   const handleSearch = () => {
//     if (!query.trim()) return;

//     const matchedUsers = users.filter((user) =>
//       user.skills && user.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()))
//     );
//     setMatchedUsers(matchedUsers);
//   };

//   const handleEmail = (email, name) => {
//     const subject = `Study Partner Request - ${name}`;
//     const body = `Hello ${name},\n\nI am interested in collaborating on a study project with you. Let's discuss more!\n\nBest regards.`;
    
//     const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Logo Section */}
//       <div className="logo-container">
//         <img src={StudyBuddyLogo} alt="StudyBuddy Logo" className="logo" />
//         <h1 className="app-title">StudyBuddy</h1>
//         <p className="tagline">"Find your perfect study partner today!"</p>
//         <p className="tagline">"Connect, collaborate, and grow together!"</p>
//       </div>

//       {/* Search Section */}
//       <h2 className="dashboard-title">Find Study Partners</h2>
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter a skill..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>

//       {/* Matched Users Section */}
//       <div className="users-container">
//         {matchedUsers.length > 0 ? (
//           matchedUsers.map((user, index) => (
//             <div key={index} className="user-card">
//               <h3 className="user-name">{user.name}</h3>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
//               <p><strong>Research Work:</strong> {user.researchWork}</p>
//               <p><strong>Availability:</strong> 
//                 {user.availability 
//                   ? `${user.availability.day}, ${user.availability.from} to ${user.availability.to}` 
//                   : "Not Provided"}
//               </p>
//               <p><strong>Education:</strong> {user.education} - {user.currentYear}</p>
//               <p><strong>Notes:</strong> {user.notes || "No notes available"}</p>

//               {/* Send Email Button */}
//               <button className="zoom-button" onClick={() => handleEmail(user.email, user.name)}>
//                 Send Email
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="no-matches">No matches found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import StudyBuddyLogo from "../assets/studybuddy_logo.png"; // Ensure correct path
import "./Dashboard.css";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [matchedUsers, setMatchedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => doc.data());
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    const matchedUsers = users.filter((user) =>
      user.skills && user.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()))
    );
    setMatchedUsers(matchedUsers);
  };

  const handleEmail = (email, name) => {
    const subject = `Study Partner Request - ${name}`;
    const body = `Hello ${name},\n\nI am interested in collaborating on a study project with you. Let's discuss more!\n\nBest regards.`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div className="dashboard-container">
      {/* StudyBuddy Logo and Taglines */}
      <div className="logo-container">
        <img src={StudyBuddyLogo} alt="StudyBuddy Logo" className="logo" />
        <h1 className="app-title">StudyBuddy</h1>
        <p className="tagline">"Learn Together, Grow Together"</p>
        <p className="tagline">"Find the perfect study partner and excel!"</p>
      </div>

      {/* Search Box */}
      <h2 className="dashboard-title">Find Study Partners</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter a skill..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* User Cards */}
      <div className="users-container">
        {matchedUsers.length > 0 ? (
          matchedUsers.map((user, index) => (
            <div key={index} className="user-card">
              <h3 className="user-name">{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
              <p><strong>Research Work:</strong> {user.researchWork}</p>
              <p><strong>Availability:</strong> 
                {user.availability 
                  ? `${user.availability.day}, ${user.availability.from} to ${user.availability.to}` 
                  : "Not Provided"}
              </p>
              <p><strong>Education:</strong> {user.education} - {user.currentYear}</p>
              <p><strong>Notes:</strong> {user.notes || "No notes available"}</p>

              <button className="zoom-button" onClick={() => handleEmail(user.email, user.name)}>
                Send Email
              </button>
            </div>
          ))
        ) : (
          <p>No matches found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
