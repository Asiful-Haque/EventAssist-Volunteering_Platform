import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/user/login";
import Profile from "./pages/user/profile";
import SignupPage from "./pages/user/signup";
import AddHistoryPage from "./pages/user/add_history";
import DashboardPage from "./pages/Dashboard/dashboard";
import HelpPostPage from "./pages/Help_post/help_post";
import AddPost from "./pages/Help_post/add_post";
import HelpPostDetailsPage from "./pages/Help_post/help_post_details";
import LandingPage from "./pages/landing";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add_history" element={<AddHistoryPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/community_help_post" element={<HelpPostPage />} />
                <Route path="/add_post" element={<AddPost />} />
                <Route path="/help_post_details/:id" element={<HelpPostDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
