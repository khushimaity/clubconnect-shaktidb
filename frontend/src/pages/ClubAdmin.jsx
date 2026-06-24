import "../styles/ClubAdmin.css";
import { Link } from "react-router-dom";

function ClubAdmin() {

  const clubName =
    localStorage.getItem("clubName") ||
    "Coding Club";

  const requests =
    JSON.parse(
      localStorage.getItem("joinRequests")
    ) || [];

  const clubRequests =
    requests.filter(
      (req) => req.club === clubName
    );

  const clubStats = {
    "Coding Club": {
      events: 5,
      requests: clubRequests.length,
    },

    "Music Club": {
      events: 3,
      requests: clubRequests.length,
    },

    "Dance Club": {
      events: 6,
      requests: clubRequests.length,
    },

    "Photography Club": {
      events: 2,
      requests: clubRequests.length,
    },

    "Robotics Club": {
      events: 7,
      requests: clubRequests.length,
    },

    "Literary Club": {
      events: 4,
      requests: clubRequests.length,
    },

    "Sports Club": {
      events: 8,
      requests: clubRequests.length,
    },

    "IEEE Student Branch": {
      events: 6,
      requests: clubRequests.length,
    },

    "IEDC": {
      events: 5,
      requests: clubRequests.length,
    },

    "NSS": {
      events: 4,
      requests: clubRequests.length,
    },
  };

  const allMembers =
  JSON.parse(
    localStorage.getItem("clubMembers")
  ) || {};

   const memberCount =
     (allMembers[clubName] || []).length;
   
   const stats =
     clubStats[clubName] ||
     clubStats["Coding Club"];

  return (
    <div className="admin-container">

      {/* SIDEBAR */}

      <div className="admin-sidebar">

        <h2>ClubConnect</h2>

        <ul>

          <li>
            <Link to="/club-admin">
              🏠 Dashboard
            </Link>
          </li>

          <li>
            <Link to="/members">
              👥 Members
            </Link>
          </li>

          <li>
            <Link to="/manage-events">
              📅 Events
            </Link>
          </li>

          <li>
            <Link to="/announcements-admin">
              📢 Announcements
            </Link>
          </li>

          <li>
            <Link to="/analytics">
              📊 Reports
            </Link>
          </li>

          <li>
            <Link to="/">
              🚪 Logout
            </Link>
          </li>

        </ul>

      </div>

      {/* MAIN */}

      <div className="admin-main">

        <div className="admin-header">

          <h1>
            {clubName} Dashboard 👋
          </h1>

          <p>
            Manage members, events,
            announcements and club
            activities from one place.
          </p>

        </div>

        {/* STATS */}

        <div className="admin-stats">

          <div className="admin-card">
            <h2>{memberCount}</h2>
            <p>Total Members</p>
          </div>

          <div className="admin-card">
            <h2>{stats.events}</h2>
            <p>Upcoming Events</p>
          </div>

          <div className="admin-card">
            <h2>{stats.requests}</h2>
            <p>Pending Requests</p>
          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="quick-actions">

          <button>
            ➕ Create Event
          </button>

          <button>
            📢 Post Announcement
          </button>

          <button>
            ✅ Approve Members
          </button>

          <button>
            📊 Generate Report
          </button>

        </div>

        {/* DASHBOARD SECTIONS */}

        <div className="dashboard-sections">

          {/* REQUESTS */}

          <div className="recent-members">

            <h2>
              Pending Join Requests
            </h2>

            {clubRequests.length === 0 ? (

              <p>
                No pending requests
              </p>

            ) : (

              clubRequests.map(
                (request, index) => (

                  <div
                    className="request-card"
                    key={index}
                  >

                    <h4>
                      {request.studentName}
                    </h4>

                    <p>
                      Requested to join{" "}
                      {request.club}
                    </p>

                    <div className="request-actions">

                      <button>
                        Approve
                      </button>

                      <button className="reject-btn">
                        Reject
                      </button>

                    </div>

                  </div>

                )
              )

            )}

          </div>

          {/* EVENTS */}

          <div className="recent-events">

            <h2>
              Upcoming Events
            </h2>

            <div className="event-card">
              <h4>
                Web Development Workshop
              </h4>
              <p>
                📅 15 July 2026
              </p>
              <p>
                📍 Seminar Hall
              </p>
            </div>

            <div className="event-card">
              <h4>
                HackTKM 2026
              </h4>
              <p>
                📅 20 July 2026
              </p>
              <p>
                📍 Innovation Lab
              </p>
            </div>

            <div className="event-card">
              <h4>
                Open Source Meetup
              </h4>
              <p>
                📅 28 July 2026
              </p>
              <p>
                📍 Computer Lab
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClubAdmin;