import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/user/login";
import Profile from "./pages/user/profile";
import SignupPage from "./pages/user/signup";
import AddHistoryPage from "./pages/user/add_history";
import DashboardPage from "./pages/Dashboard/dashboard";
import HelpPostPage from "./pages/Help_post/help_post";
import AddPost from "./pages/Help_post/add_post";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Welcome to Our App</h1>
                            <h2>Hello React</h2>
                            <div>
                                <button>
                                    <Link to="/login">Login</Link>
                                </button>
                                <button>
                                    <Link to="/signup">Signup</Link>
                                </button>
                            </div>
                        </>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add_history" element={<AddHistoryPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/community_help_post" element={<HelpPostPage />} />
                <Route path="/add_post" element={<AddPost />} />
            </Routes>
        </Router>
    );
}

export default App;
