import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/

let mapAnimals = (singleAnimal, i) => {
	return <li key={i}>{singleAnimal}</li>;
};

const animalsInHTML = animals.map(mapAnimals);

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
