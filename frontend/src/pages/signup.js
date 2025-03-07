import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
    const [page, setPage] = useState(1); //by default first page
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState("");
    const [causes, setCauses] = useState([]);

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setFullName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleSkillChange = (e) => {
        setSkills(e.target.value);
    }

    
    const goToNextPage = () => {
        if (!fullName || !email || !age || !gender) {
            alert("Please fill all fields correctly.");
            return;
        }
        if (page === 1 && fullName && email && age && gender) {
            setPage(page + 1);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (!password || password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Prepare user data object
        const userData = {
            fullName,
            email,
            password,
            age,
            gender,
            skills,
            causes,
        };
        console.log("user data is ", userData);
        
        try {
            const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Signup successful!");
                navigate("/");
            } else {
                alert(data.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred. Please try again later.");
        }
        navigate("/");
    };


    const toggleSelection = (e) => {
        const selectedCause = e.target.textContent; 
        setCauses(
            (prevCauses) =>
                prevCauses.includes(selectedCause)
                    ? prevCauses.filter((cause) => cause !== selectedCause) // Removing if already selected
                    : [...prevCauses, selectedCause] 
        );
    };

  return (
      <>
          <Header />
          <div className="flex justify-center items-center h-screen bg-[#080710]">
              <div className="relative w-96 h-auto p-8 rounded-lg shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
                  {/* Background Gradient Circles */}
                  <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full -top-10 -left-10 opacity-10 z-0"></div>
                  <div className="absolute w-48 h-48 bg-gradient-to-r from-red-500 to-orange-400 rounded-full -bottom-10 -right-10 opacity-10 z-0"></div>

                  <h3 className="text-white text-2xl font-semibold text-center">Sign Up Here</h3>

                  <form onSubmit={handleSubmit} className="mt-6">
                      {/* Page 1: Basic Information */}
                      {page === 1 && (
                          <>
                              <label className="text-white font-medium">Full Name</label>
                              <input
                                  type="text"
                                  name="name"
                                  placeholder="Enter your name"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={fullName}
                                  onChange={handleNameChange}
                              />
                              <label className="text-white font-medium mt-4 block">Email</label>
                              <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={email}
                                  onChange={handleEmailChange}
                              />
                              <label className="text-white font-medium mt-4 block">Age</label>
                              <input
                                  type="number"
                                  name="age"
                                  placeholder="Age"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={age}
                                  onChange={handleAgeChange}
                              />
                              <label className="text-white font-medium mt-4 block">Gender</label>
                              <select
                                  className="w-full mt-2 p-3 bg-white/20 text-black rounded-md outline-none focus:ring-2 focus:ring-blue-500e"
                                  value={gender}
                                  onChange={handleGenderChange}
                              >
                                  <option value="">Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                              </select>
                              <div className="flex justify-end mt-6">
                                  <button
                                      type="button"
                                      onClick={goToNextPage}
                                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-10"
                                  >
                                      Next
                                  </button>
                              </div>
                          </>
                      )}

                      {/* Page 2: Password and Confirmation */}
                      {page === 2 && (
                          <>
                              <label className="text-white font-medium">Password</label>
                              <input
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={password}
                                  onChange={handlePasswordChange}
                              />
                              <label className="text-white font-medium mt-4 block">
                                  Confirm Password
                              </label>
                              <input
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Confirm Password"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={confirmPassword}
                                  onChange={handleConfirmPasswordChange}
                              />
                              <label className="text-white font-medium mt-4 block">Skills</label>
                              <input
                                  type="text"
                                  name="skills"
                                  placeholder="Skills"
                                  className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                                  value={skills}
                                  onChange={handleSkillChange}
                              />

                              <label className="text-white font-medium mt-4 block">
                                  Causes You Support
                              </label>
                              <div className="flex gap-2 flex-wrap">
                                  {[
                                      "Environmental",
                                      "Education",
                                      "Healthcare",
                                      "Animal Welfare",
                                  ].map((cause) => (
                                      <button
                                          type="button"
                                          key={cause}
                                          className={`px-3 py-1 rounded-md text-white border ${
                                              causes.includes(cause)
                                                  ? "bg-green-500"
                                                  : "bg-white/20"
                                          }`}
                                          onClick={(e) => toggleSelection (e)}
                                      >
                                          {cause}
                                      </button>
                                  ))}
                              </div>
                              <div className="flex justify-center mt-6">
                                  <button
                                      type="submit"
                                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                  >
                                      Sign Up
                                  </button>
                              </div>
                          </>
                      )}
                  </form>

                  {/* Link to Login page */}
                  <div className="mt-6 flex justify-center gap-4">
                      <p className="text-white z-10">
                          Already have an account?{" "}
                          <Link to="/login" className="text-blue-500">
                              Login
                          </Link>
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
}
