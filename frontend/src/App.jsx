// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { auth } from "./firebase"; 
// import { useAuthState } from "react-firebase-hooks/auth";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Dashboard from "./components/Dashboard";

// const App = () => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) return <p className="loading-text">Loading...</p>; // Show a loader while checking auth

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
//         <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
//         <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
