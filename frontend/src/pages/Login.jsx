import "../styles/Login.css";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaTheaterMasks,
  FaTrophy,
} from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");

  const [selectedClub, setSelectedClub] =
    useState("Coding Club");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      navigate("/dashboard");
    } else {
      localStorage.setItem(
        "clubName",
        selectedClub
      );

      navigate("/club-admin");
    }
  };

  return (
    <div className="login-container">

      {/* LEFT SECTION */}

      <div className="login-left">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ClubConnect
        </motion.h1>

        <h2>
          Connect. Collaborate. Create.
        </h2>

        <p>
          Access your clubs, events,
          announcements and campus
          community from one place.
        </p>

        <div className="stats-grid">

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaUsers size={28} />
            <h3>1248+</h3>
            <p>Students</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaTheaterMasks size={28} />
            <h3>24</h3>
            <p>Clubs</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaCalendarAlt size={28} />
            <h3>37</h3>
            <p>Events</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaTrophy size={28} />
            <h3>142</h3>
            <p>Conducted</p>
          </motion.div>

        </div>

        <div className="features">

          <div>
            ✨ Join clubs based on your interests
          </div>

          <div>
            🚀 Participate in workshops and hackathons
          </div>

          <div>
            📢 Receive announcements instantly
          </div>

          <div>
            🤝 Build your campus network
          </div>

        </div>

      </div>

      {/* RIGHT SECTION */}

      <motion.div
        className="login-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <div className="role-tabs">

            <button
              className={
                role === "student"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setRole("student")
              }
            >
              Student
            </button>

            <button
              className={
                role === "executive"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setRole("executive")
              }
            >
              Club Executive
            </button>

          </div>

          <input
            type="email"
            placeholder="College Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          {role === "executive" && (
            <select
              className="club-select"
              value={selectedClub}
              onChange={(e) =>
                setSelectedClub(
                  e.target.value
                )
              }
            >
              <option>
                Coding Club
              </option>

              <option>
                Music Club
              </option>

              <option>
                Dance Club
              </option>

              <option>
                Photography Club
              </option>

              <option>
                Robotics Club
              </option>

              <option>
                Literary Club
              </option>

              <option>
                Sports Club
              </option>

              <option>
                IEEE Student Branch
              </option>

              <option>
                IEDC
              </option>

              <option>
                NSS
              </option>
            </select>
          )}

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="forgot-password">
            Forgot Password?
          </p>

          <p className="register-link">
            Don't have an account?{" "}
            <Link to="/register">
              Register Here
            </Link>
          </p>

        </div>
      </motion.div>

    </div>
  );
}

export default Login;