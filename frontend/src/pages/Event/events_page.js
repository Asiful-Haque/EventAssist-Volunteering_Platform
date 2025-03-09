// import { Link } from "react-router-dom";
import EvenCard from "../../components/EventCard";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
    const navigate = useNavigate();
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
                            {/* {posts.map((post) => (
                                <EvenCard post={post} />
                            ))} */}
                            <EvenCard />
                            <EvenCard />
                            <EvenCard />
                            <EvenCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventPage;
