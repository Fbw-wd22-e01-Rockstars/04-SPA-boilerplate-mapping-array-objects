import React from "react";
import ReactDOM from "react-dom/client";

const animals = [
  { label: "Horse", id:1 },
  { label: "Turtle" ,id:2},
  { label: "Elephant" ,id:3},
  { label: "Monkey",id:4 },
];

/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map((singleAnimal) => {
  return <li key={singleAnimal.id}>{singleAnimal.label}</li>;
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ul>{animalsInHTML}</ul>);
