import { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [role, setRole] = useState("student");

  return (
    <div className="register-container">

      {/* LEFT SECTION */}

      <div className="register-left">

        <div>
          <h1>ClubConnect</h1>

          <h2>Connect. Collaborate. Create.</h2>

          <p>
            Join clubs, participate in exciting events,
            build meaningful connections, and make the
            most of your campus life.
          </p>

          <div className="stats">

            <div className="stat-card">
              👥 <span>1248+</span> Active Students
            </div>

            <div className="stat-card">
              🎭 <span>24</span> Student Clubs
            </div>

            <div className="stat-card">
              📅 <span>37</span> Upcoming Events
            </div>

            <div className="stat-card">
              🏆 <span>142</span> Events Conducted
            </div>

          </div>

          <div className="features">

            <div>✨ Join clubs based on your interests</div>

            <div>🚀 Participate in workshops and hackathons</div>

            <div>📢 Receive announcements instantly</div>

            <div>🤝 Build your campus network</div>

          </div>

        </div>

      </div>

      {/* RIGHT SECTION */}

      <div className="register-right">

        <div className="register-card">

          <h2 className="register-title">
            {role === "student"
              ? "Create Student Account"
              : "Create Club Executive Account"}
          </h2>

          <div className="role-tabs">

            <button
              className={role === "student" ? "active-tab" : ""}
              onClick={() => setRole("student")}
            >
              Student
            </button>

            <button
              className={role === "clubhead" ? "active-tab" : ""}
              onClick={() => setRole("clubhead")}
            >
              Club Executive
            </button>

          </div>

          {role === "student" ? (
            <form>

              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="College Email" />

              <select>
                <option>Department</option>
                <option>Computer Science</option>
                <option>Electronics</option>
                <option>Electrical</option>
                <option>Mechanical</option>
                <option>Civil</option>
                <option>Architecture</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>

              <select>
                <option>Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>

              <input type="password" placeholder="Password" />

              <div className="password-info">
                ✓ Minimum 8 characters <br />
                ✓ One uppercase letter <br />
                ✓ One number
              </div>

              <input
                type="password"
                placeholder="Confirm Password"
              />

              <button className="register-btn">
                Create Student Account
              </button>

            </form>
          ) : (
            <form>

              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="College Email" />

              <select>
                <option>Select Club</option>
                <option>Coding Club</option>
                <option>Robotics Club</option>
                <option>AI & Data Science Club</option>
                <option>Cyber Security Club</option>
                <option>Music Club</option>
                <option>Dance Club</option>
                <option>Photography Club</option>
                <option>Literary Club</option>
                <option>Sports Club</option>
                <option>Entrepreneurship Club</option>
                <option>Nature Club</option>
                <option>Drama Club</option>
                <option>IEEE Student Branch</option>
                <option>CSI Student Chapter</option>
                <option>IEDC</option>
                <option>NSS</option>
              </select>

              <select>
                <option>Position</option>
                <option>President</option>
                <option>Vice President</option>
                <option>Secretary</option>
                <option>Joint Secretary</option>
                <option>Treasurer</option>
                <option>Technical Lead</option>
                <option>Event Coordinator</option>
                <option>Media Coordinator</option>
              </select>

              <input
                type="text"
                placeholder="Executive Verification Code"
              />

              <div className="verification-info">
                Verification codes are issued by Faculty
                Coordinators and Student Affairs Office.
              </div>

              <input type="password" placeholder="Password" />

              <div className="password-info">
                ✓ Minimum 8 characters <br />
                ✓ One uppercase letter <br />
                ✓ One number
              </div>

              <input
                type="password"
                placeholder="Confirm Password"
              />

              <button className="register-btn">
                Create Executive Account
              </button>

            </form>
          )}

          <div className="bottom-link">
            Already have an account?
            <a href="/"> Login Here</a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;