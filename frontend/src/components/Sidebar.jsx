import { Link } from "react-router-dom";

function Sidebar() {
  return (
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

      <Link to="/announcements" className="menu-item">
        Announcements
      </Link>

      <Link to="/profile" className="menu-item">
        Profile
      </Link>
    </div>
  );
}

export default Sidebar;