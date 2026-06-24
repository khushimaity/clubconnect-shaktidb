import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Announcements from "./pages/Announcements";
import ClubDetails from "./pages/ClubDetails";
import ClubAdmin from "./pages/ClubAdmin";
import Members from "./pages/Members";
import ManageEvents from "./pages/ManageEvents";
import ManageAnnouncements from "./pages/ManageAnnouncements";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/club/:clubName" element={<ClubDetails />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/club-admin" element={<ClubAdmin />} />
        <Route path="/members" element={<Members />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/announcements-admin" element={<ManageAnnouncements />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;