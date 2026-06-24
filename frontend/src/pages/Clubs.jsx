import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function Clubs() {
  const clubs = [
    {
      name: "Coding Club",
      icon: "💻",
      members: 128,
      category: "Technical",
      description:
        "Learn programming, web development, competitive coding and participate in hackathons."
    },
    {
      name: "Robotics Club",
      icon: "🤖",
      members: 92,
      category: "Technical",
      description:
        "Build robots, work on automation projects and participate in robotics competitions."
    },
    {
      name: "Music Club",
      icon: "🎵",
      members: 85,
      category: "Cultural",
      description:
        "Showcase your musical talent through performances and cultural events."
    },
    {
      name: "Dance Club",
      icon: "💃",
      members: 76,
      category: "Cultural",
      description:
        "Participate in stage performances, flash mobs and inter-college competitions."
    },
    {
      name: "Photography Club",
      icon: "📷",
      members: 64,
      category: "Creative",
      description:
        "Capture memorable moments and learn photography and editing techniques."
    },
    {
      name: "Literary Club",
      icon: "📚",
      members: 58,
      category: "Literary",
      description:
        "Improve writing, public speaking, debating and creative storytelling skills."
    },
    {
      name: "Sports Club",
      icon: "⚽",
      members: 140,
      category: "Sports",
      description:
        "Participate in football, cricket, volleyball and various athletic events."
    },
    {
      name: "Entrepreneurship Club",
      icon: "🚀",
      members: 72,
      category: "Innovation",
      description:
        "Learn startup building, innovation, leadership and business development."
    }
  ];

  const handleJoinClub = (clubName) => {
    alert(`Join request sent to ${clubName}`);
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Explore Clubs</h1>

        <input
          type="text"
          placeholder="Search clubs..."
          className="search-bar"
        />

        <div className="category-row">
          <button>All</button>
          <button>Technical</button>
          <button>Cultural</button>
          <button>Sports</button>
          <button>Innovation</button>
        </div>

        <div className="clubs-grid">

          {clubs.map((club, index) => (
            <div className="club-card" key={index}>

              <h2>{club.icon}</h2>

              <h3>{club.name}</h3>

              <p>{club.category}</p>

              <p>
                <strong>{club.members}</strong> Members
              </p>

              <p className="club-desc">
                {club.description}
              </p>

              <div className="club-actions">

                <Link
                  to={`/club/${encodeURIComponent(
                    club.name
                  )}`}
                >
                  <button className="view-btn">
                    View Club
                  </button>
                </Link>

                <button
                  className="join-btn"
                  onClick={() =>
                    handleJoinClub(club.name)
                  }
                >
                  Join Club
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Clubs;