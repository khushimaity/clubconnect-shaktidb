import "../styles/Login.css";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaTheaterMasks } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="left-section">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ClubConnect
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Connect. Collaborate. Create.
        </motion.h2>

        <p>
          Discover clubs, join events and build meaningful
          connections across your campus.
        </p>

        <button className="explore-btn">
          Explore Communities
        </button>

        <div className="stats-grid">
          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaUsers size={28} />
            <h3>1200+</h3>
            <p>Students</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaTheaterMasks size={28} />
            <h3>50+</h3>
            <p>Clubs</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -8 }}
          >
            <FaCalendarAlt size={28} />
            <h3>300+</h3>
            <p>Events</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="right-section"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="login-card">
          <h2>Welcome Back 👋</h2>

          <input
            type="email"
            placeholder="College Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

          <p>
            New here?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;