import React from "react";

const TeamCard = ({ team }) => {
    return (
        <div className="bg-white p-5  shadow-lg hover:shadow-2xl cursor-pointer text-center bg-opacity-30 w-[100%]">
            <img
                src={`https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`}
                alt="Random Post"
                className="mt-3 w-full h-56 object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold mt-3">{team.team_name}</h3>
            <p className="text-gray-500 text-sm">{team.team_description}</p>
            <button className="px-4 py-2 mt-4 bg-black text-red-500 rounded-lg shadow-md hover:bg-white hover:text-black">
                Form Team
            </button>
        </div>
    );
};

export default TeamCard;
