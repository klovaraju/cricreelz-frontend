import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user.username}!</h1>
                <p className="text-gray-600 mb-6">You have successfully logged in to your account.</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Welcome;