// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css"; // Ensure CSS is correctly imported

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigate("/dashboard");
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error with Google sign-in:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">Welcome Back</h2>

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="login-input"
//         />

//         {/* Password Input */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />

//         {/* Login Button */}
//         <button onClick={handleLogin} className="login-button">
//           Login
//         </button>

//         <p className="or-text">OR</p>

//         {/* Google Sign-in */}
//         <button onClick={signInWithGoogle} className="google-button">
//           <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="google-logo" />
//           Sign in with Google
//         </button>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <Link to="/signup" className="signup-link">
//             Sign up here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 
import StudyBuddyLogo from "../assets/studybuddy_logo.png"; // Ensure the logo is placed in /assets

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // const signInWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Error with Google sign-in:", error);
  //   }
  // };

  return (
    <div className="login-container">
      {/* StudyBuddy Logo and Taglines */}
      <div className="logo-container">
        <img src={StudyBuddyLogo} alt="StudyBuddy Logo" className="logo" />
        <h1 className="app-title">StudyBuddy</h1>
        <p className="tagline">"Learn Together, Grow Together"</p>
        <p className="tagline">"Find your perfect study partner today!"</p>
      </div>

      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        {/* Login Button */}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <p className="or-text">OR</p>

        {/* Google Sign-in */}
        {/* <button onClick={signInWithGoogle} className="google-button">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="google-logo" />
          Sign in with Google
        </button> */}

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
