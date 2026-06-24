import "../styles/Members.css";
import { useState } from "react";

function Members() {

  const clubName =
    localStorage.getItem("clubName") ||
    "Coding Club";

  const [members, setMembers] = useState(() => {

    const storedMembers =
      JSON.parse(
        localStorage.getItem("clubMembers")
      ) || {};

    const defaultMembers = {
      "Coding Club": [
        {
          name: "Rahul Sharma",
          department: "CSE",
          year: "3rd Year",
        },
        {
          name: "Anjali Nair",
          department: "ECE",
          year: "2nd Year",
        },
      ],

      "Music Club": [
        {
          name: "Akhil Raj",
          department: "ME",
          year: "4th Year",
        },
      ],

      "Robotics Club": [
        {
          name: "Sneha Thomas",
          department: "EEE",
          year: "3rd Year",
        },
      ],
    };

    return (
      storedMembers[clubName] ||
      defaultMembers[clubName] ||
      []
    );
  });

  const removeMember = (index) => {

    const updatedMembers =
      members.filter(
        (_, i) => i !== index
      );

    setMembers(updatedMembers);

    const allMembers =
      JSON.parse(
        localStorage.getItem("clubMembers")
      ) || {};

    allMembers[clubName] =
      updatedMembers;

    localStorage.setItem(
      "clubMembers",
      JSON.stringify(allMembers)
    );
  };

  return (
    <div className="members-container">

      <div className="members-header">

        <h1>
          {clubName} Members
        </h1>

        <input
          type="text"
          placeholder="Search members..."
        />

      </div>

      <div className="members-table">

        <div className="table-header">

          <span>Name</span>

          <span>Department</span>

          <span>Year</span>

          <span>Status</span>

          <span>Action</span>

        </div>

        {members.length === 0 ? (

          <div
            style={{
              padding: "30px",
              textAlign: "center",
            }}
          >
            No members found
          </div>

        ) : (

          members.map(
            (member, index) => (

              <div
                className="table-row"
                key={index}
              >

                <span>
                  {member.name}
                </span>

                <span>
                  {member.department}
                </span>

                <span>
                  {member.year}
                </span>

                <span className="active">
                  Active
                </span>

                <div className="actions">

                  <button
                    className="remove"
                    onClick={() =>
                      removeMember(index)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            )
          )

        )}

      </div>

    </div>
  );
}

export default Members;