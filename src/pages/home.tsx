import React from "react";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React Fundamentals Week 1</h1>
            <h3>Components: </h3>
            <NavLink to="/components">Component</NavLink>

            <h3>State: </h3>
            <NavLink to="/state">State</NavLink>
        </div>
    );
};

export default Home;