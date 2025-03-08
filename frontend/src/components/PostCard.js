import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
    const navigate = useNavigate();

    const onPostClick = () => {
            navigate(`/post/${post.id}`);
    };

    return (
        <div
            key={post.id}
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:scale-105"
            onClick={onPostClick}
        >
            <div className="flex items-center mb-3">
                <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>{" "}
                {/* Placeholder for profile image */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.description}</p>
                </div>
            </div>
            <div className="flex justify-between text-gray-500 text-sm">
                <span>10 mins ago</span> {/* Placeholder for time */}
                <button className="flex items-center space-x-1 hover:text-blue-500">
                    <span>Read More</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PostCard;
