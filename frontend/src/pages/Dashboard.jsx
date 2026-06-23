import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2 className="logo">ClubConnect</h2>

       <Link to="/dashboard" className="menu-item">
         Dashboard
       </Link>
       
       <Link to="/clubs" className="menu-item">
         Clubs
       </Link>
       
       <Link to="/events" className="menu-item">
         Events
       </Link>
       
       <Link to="/profile" className="menu-item">
         Profile
       </Link>
             
      </div>

      <div className="main-content">

        <div className="welcome-card">
          <h1>Welcome Back 👋</h1>
          <p>
            Discover clubs and participate in exciting campus events.
          </p>
        </div>

        <div className="stats-row">

          <div className="stat-box">
            <h2>12</h2>
            <p>Joined Clubs</p>
          </div>

          <div className="stat-box">
            <h2>5</h2>
            <p>Upcoming Events</p>
          </div>

          <div className="stat-box">
            <h2>8</h2>
            <p>Announcements</p>
          </div>

        </div>

        <h2 className="section-title">
          Featured Clubs
        </h2>

        <div className="clubs-grid">

          <div className="club-card">
            💻 Coding Club
          </div>

          <div className="club-card">
            🎵 Music Club
          </div>

          <div className="club-card">
            💃 Dance Club
          </div>

          <div className="club-card">
            🤖 Robotics Club
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;