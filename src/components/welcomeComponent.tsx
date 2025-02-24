import React from "react";

/*
Functional Components = typescript components that return tsx and
can be used to display UI elements

---------- FUNCTIONAL COMPONENT EXAMPLE ----------
*/

function WelcomeComponent({name}: {name: string}) {
    return <h3>Hello, {name}</h3>;
};

export default WelcomeComponent;