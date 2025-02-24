import React from "react";
import WelcomeComponent from "../components/welcomeComponent";

/*
React component = a function or class that accepts inputs (props), 
and returns a react element.

Components allow for UI to be split into reusable, self-contained
units.

React props = properties, used to pass data from a parent component
to a child component. Props are immutable.
*/

function Components() {
    return (
        <div>
            <h1>React Components</h1>
            {/*Using welcome component: */}
            <WelcomeComponent name="Keeley"/>
        </div>
    );
};

export default Components;