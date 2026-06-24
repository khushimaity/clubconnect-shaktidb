import "../styles/Analytics.css";

function Analytics() {
  return (
    <div className="analytics-container">

      <div className="analytics-header">
        <h1>Club Analytics</h1>
        <p>
          Track club growth, event participation,
          and member engagement.
        </p>
      </div>

      {/* TOP STATS */}

      <div className="analytics-stats">

        <div className="analytics-card">
          <h2>128</h2>
          <p>Total Members</p>
        </div>

        <div className="analytics-card">
          <h2>15</h2>
          <p>Total Events</p>
        </div>

        <div className="analytics-card">
          <h2>24</h2>
          <p>Announcements</p>
        </div>

        <div className="analytics-card">
          <h2>550</h2>
          <p>Registrations</p>
        </div>

      </div>

      {/* CHARTS */}

      <div className="chart-section">

        <div className="chart-card">
          <h3>Monthly Membership Growth</h3>

          <div className="bars">

            <div className="bar jan">
              <span>Jan</span>
            </div>

            <div className="bar feb">
              <span>Feb</span>
            </div>

            <div className="bar mar">
              <span>Mar</span>
            </div>

            <div className="bar apr">
              <span>Apr</span>
            </div>

            <div className="bar may">
              <span>May</span>
            </div>

            <div className="bar jun">
              <span>Jun</span>
            </div>

          </div>

        </div>

        <div className="chart-card">

          <h3>Event Participation</h3>

          <div className="participation">

            <div>
              HackTKM 2026
              <progress value="350" max="400"></progress>
            </div>

            <div>
              Web Workshop
              <progress value="120" max="150"></progress>
            </div>

            <div>
              Open Source Meetup
              <progress value="80" max="100"></progress>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;