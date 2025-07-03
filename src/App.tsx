import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* Add more routes here as needed */}
            </Switch>
        </Router>
    );
};

export default App;