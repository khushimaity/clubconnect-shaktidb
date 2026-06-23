-- ClubConnect Database Schema

CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(20),
    created_at TIMESTAMP
);

CREATE TABLE Clubs (
    club_id INT PRIMARY KEY,
    club_name VARCHAR(100),
    description TEXT,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

CREATE TABLE ClubMembers (
    membership_id INT PRIMARY KEY,
    club_id INT,
    user_id INT,
    joined_at TIMESTAMP,
    FOREIGN KEY (club_id) REFERENCES Clubs(club_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Events (
    event_id INT PRIMARY KEY,
    club_id INT,
    title VARCHAR(200),
    description TEXT,
    event_date DATE,
    venue VARCHAR(100),
    FOREIGN KEY (club_id) REFERENCES Clubs(club_id)
);

CREATE TABLE EventRegistrations (
    registration_id INT PRIMARY KEY,
    event_id INT,
    user_id INT,
    registration_date TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY,
    event_id INT,
    user_id INT,
    status VARCHAR(20),
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Announcements (
    announcement_id INT PRIMARY KEY,
    club_id INT,
    title VARCHAR(200),
    content TEXT,
    posted_at TIMESTAMP,
    FOREIGN KEY (club_id) REFERENCES Clubs(club_id)
);
