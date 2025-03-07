// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mt-3 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mt-3 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full mt-4 p-2 bg-blue-500 text-white rounded">
                        Login
                    </button>
                </form>
                <p className="text-center mt-3">
                    Don't have an account? <a href="/register" className="text-blue-600">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
