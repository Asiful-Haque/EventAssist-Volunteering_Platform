import { Link } from "react-router-dom";
// import Header from "../../components/Header";const DashboardPage = () => {
import "@fortawesome/fontawesome-free/css/all.min.css";

//     return (
//         <>
//             <Header />
//             <div>
//                 <h2>Hello from Dashboard</h2>
//                 <div>
//                     <button>
//                         <Link to="/community_help_post">Community Help post</Link>
//                     </button>
//                     <button>
//                         <Link to="/signup">Signup</Link>
//                     </button>
//                     <button>
//                         <Link to="/events">Events</Link>
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DashboardPage;
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div
            className="relative bg-cover bg-center h-auto flex justify-center"
            style={{ backgroundImage: "url(/volunteering.jpg)" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white bg-opacity-90">
                <h1 className="text-4xl font-bold text-gray-900">
                    Hands<span className="text-red-500">ON</span>
                </h1>

                <div className="flex space-x-6 items-center">
                    <div className="text-black hover:text-black transform transition-transform duration-200 hover:scale-110">
                        <a href="/profile">Pages</a>
                    </div>
                    <div className="text-black hover:text-black transform transition-transform duration-200 hover:scale-110">
                        <a href="/events">Events</a>
                    </div>
                    <div className="text-black hover:text-black transform transition-transform duration-200 hover:scale-110">
                        <a href="/www.linkedin.com">Linkedin</a>
                    </div>
                    <a href="#" className="text-black hover:text-gray-300">
                        Github
                    </a>
                    <button className="text-black hover:text-black transform transition-transform duration-200 hover:scale-110">
                        <Link to="/signup">Logout</Link>
                    </button>

                    <button onClick={() => navigate("/profile")}>
                        <img
                            src="https://i.pravatar.cc/50"
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full border-2 border-blue-500"
                        />
                    </button>
                </div>
            </div>

            <div className="mb-8 flex flex-row justify-center items-center h-screen space-x-6 px-6">
                <div
                    onClick={() => {
                        navigate("/community_help_post");
                    }}
                    className="backdrop-blur-md bg-white/10 py-14 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer transition transform hover:scale-110 w-[250px]"
                >
                    <div className="flex items-center mb-4">
                        <div className="mx-auto flex flex-col items-center">
                            <i className="fas fa-user text-4xl text-red-500 mb-2"></i>
                            <h3 className="text-xl font-bold text-gray-900">Community Posts</h3>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        navigate("/events");
                    }}
                    className="backdrop-blur-md bg-white/10 py-14 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer transition transform hover:scale-110 w-[250px]"
                >
                    <div className="flex items-center mb-4">
                        <div className="mx-auto flex flex-col items-center">
                            <i className="fas fa-home text-4xl text-red-500 mb-2"></i>
                            <h3 className="text-xl font-bold text-gray-900">Events</h3>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        navigate("/teams");
                    }}
                    className="backdrop-blur-md bg-white/10 py-14 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer transition transform hover:scale-110 w-[250px]"
                >
                    <div className="flex items-center mb-4">
                        <div className="mx-auto flex flex-col items-center">
                            <i className="fas fa-users text-4xl text-red-500 mb-2"></i>
                            <h3 className="text-xl font-bold text-gray-900">Teams</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute flex-center bottom-0 w-[90%] bg-red-500 shadow-lg rounded-t-3xl py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-black">70+</h3>
                        <p className="text-black font-semibold">Coded Elements</p>
                        <p className="text-black">
                            From buttons to inputs, navbars, alerts, or cards, you are covered.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">15+</h3>
                        <p className="text-black font-semibold">Design Blocks</p>
                        <p className="text-black">
                            Mix the sections, change the colors and unleash creativity.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">4</h3>
                        <p className="text-black font-semibold">Pages</p>
                        <p className="text-black">
                            Save 3-4 weeks of work with our pre-made pages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
