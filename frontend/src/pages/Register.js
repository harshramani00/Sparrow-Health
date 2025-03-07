// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("patient");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, password, role });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Registration failed!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-96 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-bold text-center">Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 mt-3 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <select className="w-full p-2 mt-3 border rounded" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="patient">Patient</option>
                        <option value="physician">Physician</option>
                    </select>
                    <button type="submit" className="w-full mt-4 p-2 bg-green-500 text-white rounded">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <a href="/login" className="text-blue-600">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
