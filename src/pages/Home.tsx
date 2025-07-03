import React from 'react';
import './styles.css'; // Importing CSS styles
import { SomeComponent } from '../components'; // Importing a component from the components folder
import { fetchData } from '../services/api'; // Importing API service

const Home: React.FC = () => {
    // State and effect hooks can be added here for data fetching or other logic

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <SomeComponent /> {/* Example of using a component */}
        </div>
    );
};

export default Home;