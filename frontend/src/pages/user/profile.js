import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [historyData, setHistoryData] = useState([]);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/users/volunteering-history", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    console.log("Fetched history data:", data);
                    setHistoryData(data.history || []);
                } else {
                    console.error("Failed to fetch history");
                }
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        const fetchUserData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/users/profile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    console.log("Fetched user data:", data);
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchHistory();
        fetchUserData();
    }, []);

    return (
        <>
            <Header />
            <div className="p-4 bg-[#080710] min-h-screen">
                <div className="bg-white rounded-lg p-6 shadow-lg  w-[90%] mx-auto">
                    <form>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 text-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                    alt="Profile"
                                    className="w-3/4 h-auto rounded-full mx-auto"
                                />
                                <label className="block mt-4">
                                    <span className="inline-block px-4 py-2 bg-gray-800 text-white rounded cursor-pointer">
                                        Change Photo
                                    </span>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>

                            <div className="w-full mt-12 md:w-2/4">
                                <h5 className="text-black text-xl font-semibold">
                                    {userData ? userData.user.full_name : "Loading..."}
                                </h5>
                                <h6 className="text-blue-600 text-lg font-medium">
                                    {userData ? userData.user.email : ""}
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-8">
                            <div className="mx-auto w-full md:w-3/4">
                                <div className="border-t pt-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Name
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.full_name : "Loading..."}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Email
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.email : "Loading..."}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Age
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.age : "Loading..."}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Gender
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.gender : "Loading..."}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Skills
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.skills : "Loading..."}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Causes
                                            </label>
                                            <p className="text-blue-600">
                                                {userData ? userData.user.causes : "Loading..."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="bg-[#828282] w-[90%] mx-auto mt-12 p-6 shadow-lg text-white rounded-lg">
                        <div className="flex justify-between items-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                onClick={() => navigate("/add_history")}
                            >
                                Add History
                            </button>
                        </div>

                        {historyData.length === 0 && (
                            <h2 className="text-white text-2xl font-semibold text-center">
                                No Volunteering History
                            </h2>
                        )}
                        {/* Display fetched history data */}
                        {historyData.length > 0 && (
                            <div className="text-white text-sm mt-4 p-3 bg-gray-700/50 rounded-md">
                                <h4 className="text-lg font-semibold">
                                    Your Volunteering History:
                                </h4>
                                <ul className="mt-2">
                                    {historyData.map((item, index) => (
                                        <li key={index} className="mt-1">
                                            {item.event_name} - {item.total_hours} hours
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
