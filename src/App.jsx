// Import necessary modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/sign-up';
import SignIn from './components/sign-in';
import Layout from './pages/Layout';
import Landing from './pages/landing';
import Home from './pages/home';
import Recommend from './pages/recommend'; // Import the Recommend component
import Search from './pages/search';

// Define the App component
function App() {
    const [user, setUser] = useState(null);

    const handleSignUp = (newUser) => {
        setUser(newUser);
    };

    const handleSignIn = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const handleSignOut = () => {
        setUser(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Landing />
                        </Layout>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Layout>
                            <SignUp onSignUp={handleSignUp} />
                        </Layout>
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <Layout>
                            <SignIn onSignIn={handleSignIn} />
                        </Layout>
                    }
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route 
                    path="/search"
                    element={<Search></Search>}
                ></Route>
                <Route
                    path="/recommendations"
                    element={<Recommend user={user} onSignOut={handleSignOut} />}
                />
            </Routes>
        </Router>
    );
}

// Export the App component
export default App;
