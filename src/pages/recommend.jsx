// Import necessary modules
import React from 'react';
import Recommendations from "../components/recommendation";

// Define the Recommend component
export default function Recommend({ user, onSignOut }) {
    return (
        <div className="px-60 py-20">
            <Recommendations user={user} onSignOut={onSignOut} />
        </div>
    );
}
