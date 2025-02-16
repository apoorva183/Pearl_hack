// import React, { useState, useEffect } from "react";
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";
// import "./Signup.css"; // Add CSS for styling

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [education, setEducation] = useState("");
//   const [currentYear, setCurrentYear] = useState("");
//   const [skills, setSkills] = useState("");
//   const [researchWork, setResearchWork] = useState("");
//   const [notes, setNotes] = useState("");
//   const [availabilityDay, setAvailabilityDay] = useState("");
//   const [availabilityTimeFrom, setAvailabilityTimeFrom] = useState("");
//   const [availabilityTimeTo, setAvailabilityTimeTo] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) navigate("/dashboard");
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const handleSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         email,
//         education,
//         currentYear,
//         skills: skills.split(",").map(skill => skill.trim()),
//         researchWork,
//         notes,
//         availability: {
//           day: availabilityDay,
//           from: availabilityTimeFrom,
//           to: availabilityTimeTo
//         },
//         zoom_link: "",
//       });

//       navigate("/dashboard");
//     } catch (error) {
//       alert(`Signup failed: ${error.message}`);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2 className="signup-title">StudyBuddy - Sign Up</h2>
        
//         <input type="text" className="signup-input" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="email" className="signup-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" className="signup-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="text" className="signup-input" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
//         <input type="text" className="signup-input" placeholder="Current Year" value={currentYear} onChange={(e) => setCurrentYear(e.target.value)} />
//         <input type="text" className="signup-input" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
//         <input type="text" className="signup-input" placeholder="Research Work / Conferences" value={researchWork} onChange={(e) => setResearchWork(e.target.value)} />
//         <textarea className="signup-input" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />

//         <h3>Set Availability</h3>
//         <div className="availability-container">
//           <select value={availabilityDay} onChange={(e) => setAvailabilityDay(e.target.value)} className="signup-input">
//             <option value="">Select Day</option>
//             {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
//               <option key={day} value={day}>{day}</option>
//             ))}
//           </select>

//           <input type="time" value={availabilityTimeFrom} onChange={(e) => setAvailabilityTimeFrom(e.target.value)} className="signup-input" />
//           <input type="time" value={availabilityTimeTo} onChange={(e) => setAvailabilityTimeTo(e.target.value)} className="signup-input" />
//         </div>

//         <button className="signup-button" onClick={handleSignup}>Sign Up</button>
//         <p className="signup-link">Already have an account? <Link to="/">Login here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; 
import StudyBuddyLogo from "../assets/studybuddy_logo.png"; // Ensure the logo is placed in /assets

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [skills, setSkills] = useState("");
  const [researchWork, setResearchWork] = useState("");
  const [notes, setNotes] = useState("");
  const [availabilityDay, setAvailabilityDay] = useState("");
  const [availabilityTimeFrom, setAvailabilityTimeFrom] = useState("");
  const [availabilityTimeTo, setAvailabilityTimeTo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        education,
        currentYear,
        skills: skills.split(",").map(skill => skill.trim()),
        researchWork,
        notes,
        availability: {
          day: availabilityDay,
          from: availabilityTimeFrom,
          to: availabilityTimeTo
        },
        zoom_link: "",
      });

      navigate("/dashboard");
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      {/* StudyBuddy Logo and Taglines */}
      <div className="logo-container">
      <img src={StudyBuddyLogo} alt="StudyBuddy Logo" className="logo" />
        <h1 className="app-title">StudyBuddy</h1>
        <p className="tagline">"Learn Together, Grow Together"</p>
        <p className="tagline">"Connect with the right study partners!"</p>
      </div>

      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>
        
        <input type="text" className="signup-input" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" className="signup-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="signup-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" className="signup-input" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
        <input type="text" className="signup-input" placeholder="Current Year" value={currentYear} onChange={(e) => setCurrentYear(e.target.value)} />
        <input type="text" className="signup-input" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
        <input type="text" className="signup-input" placeholder="Research Work / Conferences" value={researchWork} onChange={(e) => setResearchWork(e.target.value)} />
        <textarea className="signup-input" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />

        <h3 className="availability-title">Set Availability</h3>
        <div className="availability-container">
          <select value={availabilityDay} onChange={(e) => setAvailabilityDay(e.target.value)} className="signup-input">
            <option value="">Select Day</option>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <input type="time" value={availabilityTimeFrom} onChange={(e) => setAvailabilityTimeFrom(e.target.value)} className="signup-input time-input" />
          <input type="time" value={availabilityTimeTo} onChange={(e) => setAvailabilityTimeTo(e.target.value)} className="signup-input time-input" />
        </div>

        <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        <p className="signup-link">Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
};

export default Signup;
