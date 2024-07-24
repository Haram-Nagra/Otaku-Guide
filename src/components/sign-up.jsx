import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp({ onSignUp }) {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            console.log('Signing up with name:', name);
            const response = await axios.post('http://localhost:4000/signup', { name });
            console.log('Signed up user:', response.data);
            onSignUp(response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-[#6C00A2] bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <button
                    onClick={handleSignUp}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUp;
