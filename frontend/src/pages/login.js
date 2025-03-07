import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User Data:", { email, password });
        const userData = {
            email,
            password,
        };
        try{
            const res = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json(); 
            console.log("Token is ",data.token);

            if (res.ok) {
                alert("login successful!");
                localStorage.setItem("token", data.token);
                navigate("/"); 
            } else {
                alert(data.message || "login failed. Please try again.");
            }
        }catch(error){
            console.error("Not fetched ", error);
        }
        navigate("/");
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-screen bg-[#080710]">
                <div className="relative w-96 h-[520px] p-8 rounded-lg shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
                    <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full -top-10 -left-10 opacity-10 z-0"></div>
                    <div className="absolute w-48 h-48 bg-gradient-to-r from-red-500 to-orange-400 rounded-full -bottom-10 -right-10 opacity-10 z-0"></div>

                    <h3 className="text-white text-2xl font-semibold text-center">Login Here</h3>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <label className="text-white font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <label className="text-white font-medium mt-4 block">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full mt-2 p-3 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <button
                            type="submit"
                            className="w-full mt-6 bg-white text-[#080710] p-3 text-lg font-semibold rounded-md hover:bg-gray-200 transition"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="flex justify-center gap-4 mt-6">
                        <div className="w-32 bg-white/20 text-white text-center py-2 rounded-md cursor-pointer hover:bg-white/30 transition">
                            <i className="fab fa-google mr-2"></i>Google
                        </div>
                        <div className="w-32 bg-white/20 text-white text-center py-2 rounded-md cursor-pointer hover:bg-white/30 transition">
                            <i className="fab fa-facebook mr-2"></i>Facebook
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                        <p className="text-white z-10">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue-500">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
