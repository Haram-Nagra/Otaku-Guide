import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from './anime'; // Corrected import path

function Recommendations({ user, onSignOut }) {
    const [recommendations, setRecommendations] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            if (!user) return; // Check if user is null
            try {
                console.log('Fetching recommendations for user:', user);
                const response = await axios.post(
                    'http://localhost:4000/recommend',
                    { user_id: user.id },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log('Recommendations fetched:', response.data);
                
                setRecommendations(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchRecommendations();
    }, [user,refresh]);

    return (
        <div>
            {/* Render recommendations only if user exists */}
            {user && (
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-white text-7xl font-serif tracking-tighter font-semibold'>Recommendations for {user.name}</h2>
                    <div className='flex flex-row-reverse justify-between'>
                        <button className="w-[90px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={onSignOut}>Sign Out</button>
                    </div>
                    <div className="recommendations-container grid grid-cols-2 gap-6 h-[300px]  ">
                        {recommendations.map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} userId={user.id} func={setRefresh} vars={refresh} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recommendations;
