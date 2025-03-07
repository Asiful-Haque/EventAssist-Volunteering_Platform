import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Profile from "./pages/profile";

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
            </Routes>
        </Router>
    );
}

export default App;
