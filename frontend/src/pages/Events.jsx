import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function Events() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Upcoming Events</h1>

        <br />

        <div className="clubs-grid">

          <div className="club-card">
            <h3>🚀 Hackathon 2026</h3>
            <p>Date: July 15, 2026</p>
            <button>Register</button>
          </div>

          <div className="club-card">
            <h3>🤖 AI Workshop</h3>
            <p>Date: July 20, 2026</p>
            <button>Register</button>
          </div>

          <div className="club-card">
            <h3>🎵 Music Fest</h3>
            <p>Date: July 25, 2026</p>
            <button>Register</button>
          </div>

          <div className="club-card">
            <h3>💃 Dance Competition</h3>
            <p>Date: August 1, 2026</p>
            <button>Register</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Events;