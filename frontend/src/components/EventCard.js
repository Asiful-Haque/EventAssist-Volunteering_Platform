import React from "react";
import { useNavigate } from "react-router-dom";

const EvenCard = () => {
    const navigate = useNavigate();

    const onPostClick = () => {
        
    };

    return (
        <div
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl w-full sm:w-[45%] md:w-[30%] cursor-pointer bg-opacity-30"
            onClick={onPostClick}
        >
            <img
                src={`https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`}
                alt="Random Post"
                className="mt-3 w-full h-56 object-cover shadow-md"
            />

            <div className="mb-3 mt-3">
                <h3 className="text-xl font-semibold text-gray-900">Music Festival 2025</h3>
                <p className="text-sm text-gray-600 mt-1">
                    Experience an amazing night with top artists from around the world.
                </p>
            </div>

            <div className="text-gray-700 text-sm space-y-2">
                <div className="flex items-center">
                    <span className="font-semibold">📅 Date:</span>
                    <span className="ml-2">March 15, 2025</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold">⏰ Time:</span>
                    <span className="ml-2">6:00 PM - 11:30 PM</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold">📍 Location:</span>
                    <span className="ml-2">Central Park, New York</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold">🏷️ Category:</span>
                    <span className="ml-2">Music & Entertainment</span>
                </div>
            </div>

            <div className="flex justify-between text-gray-500 text-xs mt-3">
                <span>Posted 10 mins ago</span>
            </div>
            <div className="flex justify-center mt-3">
                <button
                    onClick={() => navigate("/add")}
                    className="bg-black text-white py-2 px-4 font-semibold hover:bg-red-500 hover:text-white transition duration-300"
                >
                    Join Event
                </button>
            </div>
        </div>
    );
};

export default EvenCard;
