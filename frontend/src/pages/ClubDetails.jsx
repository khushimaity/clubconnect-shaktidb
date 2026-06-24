import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/ClubDetails.css";

function ClubDetails() {
  const { clubName } = useParams();

  const clubData = {
    "Coding Club": {
      icon: "💻",
      members: 128,
      category: "Technical",
      description:
        "Learn programming, web development, AI and competitive coding.",
    },

    "Music Club": {
      icon: "🎵",
      members: 85,
      category: "Cultural",
      description:
        "Showcase your musical talents through performances and events.",
    },

    "Robotics Club": {
      icon: "🤖",
      members: 92,
      category: "Technical",
      description:
        "Build robots and participate in robotics competitions.",
    },

    "Dance Club": {
      icon: "💃",
      members: 76,
      category: "Cultural",
      description:
        "Perform and compete in dance events and festivals.",
    },

    "Photography Club": {
      icon: "📷",
      members: 64,
      category: "Creative",
      description:
        "Learn photography, editing and visual storytelling.",
    },

    "Literary Club": {
      icon: "📚",
      members: 58,
      category: "Literary",
      description:
        "Improve writing, debating and public speaking skills.",
    },

    "Sports Club": {
      icon: "⚽",
      members: 140,
      category: "Sports",
      description:
        "Participate in football, cricket, volleyball and athletics.",
    },

    "Entrepreneurship Club": {
      icon: "🚀",
      members: 72,
      category: "Innovation",
      description:
        "Learn startup building, leadership and innovation.",
    },
  };

  const decodedClubName =
    decodeURIComponent(clubName);

  const club =
    clubData[decodedClubName] ||
    clubData["Coding Club"];

  const handleJoinClub = () => {
    const requests =
      JSON.parse(
        localStorage.getItem("joinRequests")
      ) || [];

    requests.push({
      studentName: "Current Student",
      club: decodedClubName,
    });

    localStorage.setItem(
      "joinRequests",
      JSON.stringify(requests)
    );

    alert(
      `Join request sent to ${decodedClubName}!`
    );
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="club-banner">

          <h1>
            {club.icon} {decodedClubName}
          </h1>

          <p>{club.description}</p>

          <button
            className="join-club-btn"
            onClick={handleJoinClub}
          >
            Join Club
          </button>

        </div>

        <div className="club-stats">

          <div className="club-stat-card">
            <h2>{club.members}</h2>
            <p>Members</p>
          </div>

          <div className="club-stat-card">
            <h2>5</h2>
            <p>Upcoming Events</p>
          </div>

          <div className="club-stat-card">
            <h2>12</h2>
            <p>Announcements</p>
          </div>

        </div>

        <div className="club-sections">

          <div className="club-box">

            <h2>Upcoming Events</h2>

            <ul>
              <li>Web Development Workshop</li>
              <li>HackTKM 2026</li>
              <li>Open Source Meetup</li>
            </ul>

          </div>

          <div className="club-box">

            <h2>Recent Announcements</h2>

            <ul>
              <li>Recruitment Open</li>
              <li>Workshop Registrations Started</li>
              <li>Orientation Meeting</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClubDetails;