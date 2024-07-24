import React, { useState } from 'react';
import {Link} from "react-router-dom"

export default function Search() {
    const [animeName, setAnimeName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (!animeName) return;

        try {
            const response = await fetch('http://localhost:4000/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ anime_name: animeName }),
            });

            if (!response.ok) {
                console.error('Error fetching search results:', response.statusText);
                return;
            }

            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <>
        <header className=" flex flex-row w-full text-[#FFFFFF]  bg-gradient-to-r from-[#6C00A2] to-[#001152] font-semibold">
            <nav className="flex flex-row justify-between p-1 px-20 gap-x-10 w-full  bg-gradient-to-r from-[#6C00A2] to-[#001152] border-b-2 border-gray-600 sticky">
                    <Link to={"/home"}className='text-center flex items-center'>Home</Link>
                    <div className="flex flex-row p-3 ">
                        <button className=" rounded-xl h-[36px] w-[146px] -mt-1 bg-[#4b035d] hidden md:block hover:scale-125 hover:bg-[#33448e] transition-all duration-300">
                            <Link to={"/recommendations"} className="hidden text-base md:block">Recommend</Link>
                        </button>
                        <a className="block w-[26px] h-[26px]  md:hidden "
                            ><div className="ham bg-auto object-contain h-full w-full"></div></a>
                    </div>
            </nav>
        </header>
        <div className="flex flex-col justify-center items-center gap-y-6 p-20">
            <h1 className="tracking-tighter text-9xl text-white text-opacity-25 mb-8">Otaku Guide</h1>
            <input
                className='text-lg text-white font-thin border rounded-3xl w-[400px] p-2 px-3 bg-gray-600 bg-opacity-40 border-slate-400'
                type="text"
                placeholder="Enter anime name"
                value={animeName}
                onChange={(e) => setAnimeName(e.target.value)}
            />
            <button
                className="w-[190px] bg-blue-900 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={handleSearch}
            >
                Search
            </button>
            <div className="mt-10">
                {searchResults.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {searchResults.map((anime) => (
                            <div key={anime.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <h2 className="text-white text-lg font-semibold">{anime.name}</h2>
                                <p className="text-gray-400">Genres in common: {anime.common_genres}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}
