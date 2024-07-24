import React, { useState } from 'react';
import axios from 'axios';

function AnimeCard({ anime, userId, func,vars }) {
    const [watched, setWatched] = useState(false);
    const [rating, setRating] = useState(1);

    const handleWatch = async () => {
        try {
            var res=await axios.post('http://localhost:4000/watched', {
                user_id: userId,
                anime_id: anime.anime_id,
                rating: parseFloat(rating),
            });
            console.log("this is it",res)

            setWatched(true);
            func(!vars)
        } catch (error) {
            console.error('Error marking as watched:', error);
        }
    };

    return (
        <div className="anime-card flex flex-col gap-y-2 justify-center items-center border-2 border-slate-500 bg-[#42278d] text-white 
                        rounded-3xl h-[350px] p-8">
            <h3 className='text-2xl text-center font-serif tracking-tighter font-semibold'>{anime.name}</h3>
            <p className='text-lg text-center font-serif tracking-tighter font-semibold'>Rating: {anime.rating}</p>
            {!watched ? (
                <div className='flex flex-row gap-x-2'>
                    <button className="w-[190px] bg-blue-900 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={handleWatch}> Start Watching</button>
                    <select className =" text-white text-lg font-serif tracking-tighter font-semibold bg-transparent bg-opacity-30" value={rating} onChange={(e) => setRating(e.target.value)}>
                        {[...Array(10).keys()].map((i) => (
                            <option className="bg-[#4b2387] bg-opacity-90" key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <p className=' bg-blue-900 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'>Watched with rating: {rating}</p>
            )}
        </div>
    );
}

export default AnimeCard;

