import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

let planetsHtml = planets.map((item, i) => (
	<li key={i} className="list-group-item">
		{item}
	</li>
));

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetsHtml}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

{
	/* <ul class="list-group m-5"> 
    <li class="list-group-item">Mars</li>
    <li class="list-group-item">Venus</li>
    <li class="list-group-item">Jupiter</li>
    <li class="list-group-item">Earth</li>
    <li class="list-group-item">Saturn</li>
    <li class="list-group-item">Neptune</li> 
</ul> */
}
