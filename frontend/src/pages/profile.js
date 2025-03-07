import React from "react";
import Header from "../components/Header";

const Profile = () => {
    return (
        <>
            <Header />
            <div className="p-4 bg-[#080710] min-h-screen">
                <div className="bg-white rounded-lg p-6 shadow-lg  w-[90%] mx-auto">
                    <form>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4">
                                <div className="text-center">
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
                            </div>
                            <div className="w-full md:w-2/4">
                                <div>
                                    <h5 className="text-gray-900 text-xl font-semibold">
                                        Kshiti Ghelani
                                    </h5>
                                    <h6 className="text-blue-600 text-lg font-medium">
                                        Web Developer and Designer
                                    </h6>
                                    <p className="text-sm text-gray-500 mt-4">
                                        RANKINGS :{" "}
                                        <span className="text-gray-700 font-semibold">8/10</span>
                                    </p>
                                    <ul className="flex space-x-4 mt-6 border-b">
                                        <li>
                                            <button
                                                className="pb-2 text-blue-600 border-b-2 border-blue-600 focus:outline-none"
                                                type="button"
                                            >
                                                About
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-8">
                            <div className="mx-auto w-full md:w-3/4">
                                <div className="border-t pt-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                User Id
                                            </label>
                                            <p className="text-blue-600">Kshiti123</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Name
                                            </label>
                                            <p className="text-blue-600">Kshiti Ghelani</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Email
                                            </label>
                                            <p className="text-blue-600">kshitighelani@gmail.com</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Phone
                                            </label>
                                            <p className="text-blue-600">123 456 7890</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Profession
                                            </label>
                                            <p className="text-blue-600">
                                                Web Developer and Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t mt-6 pt-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Experience
                                            </label>
                                            <p className="text-blue-600">Expert</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Hourly Rate
                                            </label>
                                            <p className="text-blue-600">10$/hr</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Total Projects
                                            </label>
                                            <p className="text-blue-600">230</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                English Level
                                            </label>
                                            <p className="text-blue-600">Expert</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <label className="text-gray-700 font-semibold">
                                                Availability
                                            </label>
                                            <p className="text-blue-600">6 months</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-700 font-semibold">
                                                Your Bio
                                            </label>
                                            <p className="text-gray-600">Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;
