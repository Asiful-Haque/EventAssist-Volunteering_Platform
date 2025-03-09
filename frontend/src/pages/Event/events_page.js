import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard";

const EventPage = () => {
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/event/get_events", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    console.log("Fetched Event data:", data);
                    setEvents(data.events || []); 
                } else {
                    console.error("Failed to fetch Events");
                }
            } catch (error) {
                console.error("Error events history:", error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <>
            <Header />
            <div>
                <div className="min-h-screen bg-gray-400">
                    <div className="sticky top-0 bg-black p-4 flex justify-between items-center z-10 shadow-lg">
                        <h1 className="text-2xl font-semibold text-red-500  ">
                            Contribute to the Community
                        </h1>
                        <button
                            onClick={() => navigate("/add_event")}
                            className="bg-red-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
                        >
                            Add Event
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <h2 className="text-center text-3xl font-bold text-black mb-4">
                            Recent Posts
                        </h2>

                        <div className="flex flex-wrap gap-4 justify-center">
                            {events.map((event) => (
                                <EventCard event={event} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventPage;
