
import { Link } from "react-router-dom";
import Header from "../../components/Header";const DashboardPage = () => {
    

    return (
        <>
            <Header />
            <div>
                <h2>Hello from Dashboard</h2>   
                <div>
                    <button>
                        <Link to="/community_help_post">Community Help post</Link>
                    </button>
                    <button>
                        <Link to="/signup">Signup</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
