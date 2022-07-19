import React from "react";
import ReactDOM from "react-dom/client";

const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];

/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
  return <li>hello</li>;
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ul>{animalsInHTML}</ul>);
