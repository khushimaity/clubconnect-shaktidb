import "../styles/ManageEvents.css";

function ManageEvents() {
  return (
    <div className="events-container">

      <div className="events-header">

        <h1>Manage Events</h1>

        <button className="create-btn">
          + Create Event
        </button>

      </div>

      <div className="events-grid">

        <div className="event-card">

          <h2>Web Development Workshop</h2>

          <p>📅 15 July 2026</p>

          <p>📍 Seminar Hall</p>

          <p>👥 120 Registered</p>

          <div className="event-actions">

            <button>Edit</button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

        <div className="event-card">

          <h2>HackTKM 2026</h2>

          <p>📅 20 July 2026</p>

          <p>📍 Innovation Lab</p>

          <p>👥 350 Registered</p>

          <div className="event-actions">

            <button>Edit</button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

        <div className="event-card">

          <h2>Open Source Meetup</h2>

          <p>📅 28 July 2026</p>

          <p>📍 Computer Lab</p>

          <p>👥 80 Registered</p>

          <div className="event-actions">

            <button>Edit</button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageEvents;