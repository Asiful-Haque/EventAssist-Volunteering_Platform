import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function PostCardDetails() {
    const location = useLocation();
    const { post_id, description } = location.state || {};
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    const handleCommentSubmit = async () => {
        if (!comment.trim()) {
            alert("Please enter a comment.");
            return;
        }
        try{
            console.log("Info is ",post_id,comment);
            const res = await fetch("http://localhost:5000/api/helpPost/submitComment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    post_id,
                    comment,
                }),
            });
            if (res.ok) {
                alert("Comment submitted successfully!");
                setComment(""); 
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.message}`);
            }
        }catch(error){
            console.error("Error submitting comment:", error);
            alert("An error occurred while submitting the comment.");
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 w-[90%] mx-auto mt-5 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center space-x-3">
                <img
                    src="https://i.pravatar.cc/50"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-800 text-lg leading-relaxed">{description}</p>
                <img
                    src={`https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`}
                    alt="Random Post"
                    className="mt-3 w-full h-56 object-cover rounded-xl shadow-md"
                />
            </div>

            <div className="flex justify-between items-center mt-4 text-gray-600">
                <button className="flex items-center space-x-2 text-lg hover:text-red-500 transition-all">
                    ❤️ <span className="font-semibold">12</span>
                </button>
                <button className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-all">
                    💬 <span className="font-semibold">5</span>
                </button>
            </div>

            <div className="mt-4">
                <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write a comment..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="button"
                    onClick={handleCommentSubmit}
                    className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    Submit Comment
                </button>
            </div>
        </div>
    );
}
