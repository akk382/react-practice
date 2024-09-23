import React from 'react';
import ReactDOM from 'react-dom/client';

// // Without react
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!";
// const rootElement = document.getElementById('root');
// rootElement.appendChild(heading);

// With react

// Template:
// React.createElement(tagName, attributes(this is a javascript object), children(this can be a single string of list of elements))

const heading1 = React.createElement("h1", {
    id: "h1tag",
    className: "header",
    key: "123"
},"Heading 1"); // This is an react object with props(the 2nd param, and remaining params are children), key, type(=h1)
const heading2 = React.createElement("h2", {key: "124"}, "Heading 2");
const innerElements = React.createElement("div", {id: "container"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(innerElements); // This only uses #root element above, since we only selected the root element. It doesn't modify other tags. 

