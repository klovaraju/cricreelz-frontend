import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/auth';

const Welcome = () => {
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return null;
    }

    return (
         <div>
         <div className='bg-green-500 w-screen h-screen rounded-2xl'>
         <div className='bg-gray-100 rounded-md p-6'>
         <h1 className='text-left ml-0 my-0'>CricReelz</h1>
         <button onClick={handleLogout} className='float-right rounded-sm bg-black text-blue font-medium text-white' >logout</button>
        </div>
       
        
         
         
         </div>
        
         
         
         
         
         
         
         
         
         </div>
    );
};

export default Welcome;