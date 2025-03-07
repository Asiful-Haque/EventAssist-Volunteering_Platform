import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/user/login";
import Profile from "./pages/user/profile";
import SignupPage from "./pages/user/signup";
import AddHistoryPage from "./pages/user/add_history";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
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
                        </div>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add_history" element={<AddHistoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
