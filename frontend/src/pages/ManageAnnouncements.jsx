import "../styles/ManageAnnouncements.css";

function ManageAnnouncements() {
  return (
    <div className="announcement-container">

      <div className="announcement-header">
        <h1>Manage Announcements</h1>

        <button className="post-btn">
          + New Announcement
        </button>
      </div>

      {/* CREATE ANNOUNCEMENT */}

      <div className="announcement-form">

        <input
          type="text"
          placeholder="Announcement Title"
        />

        <textarea
          rows="5"
          placeholder="Write announcement..."
        />

        <button className="publish-btn">
          Publish Announcement
        </button>

      </div>

      {/* ANNOUNCEMENTS LIST */}

      <div className="announcement-list">

        <div className="announcement-card">

          <h3>Coding Club Recruitment Open</h3>

          <p>
            Applications are now open for new
            members. Interested students can
            register before July 10.
          </p>

          <span>Posted: 20 June 2026</span>

          <div className="announcement-actions">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

        <div className="announcement-card">

          <h3>HackTKM Registrations Started</h3>

          <p>
            Register before July 10 to secure
            your participation in HackTKM 2026.
          </p>

          <span>Posted: 22 June 2026</span>

          <div className="announcement-actions">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

        <div className="announcement-card">

          <h3>Open Source Meetup</h3>

          <p>
            Join us for an exciting open source
            community meetup and networking session.
          </p>

          <span>Posted: 24 June 2026</span>

          <div className="announcement-actions">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageAnnouncements;