import planetsData from "../data/data.json";
import { useState } from "react";

export default function Header() {
	// console.log(planetsData);
	let planetList = [];
	planetsData.forEach((pl) => {
		planetList.push(pl.name);
	});

	const [chosenPlanet, setChosenPlanet] = useState(planetList[0]);
	function planetPick(e) {
		setChosenPlanet(e.target.innerText);
	}
	const planetListRender = planetList.map((planet, index) => {
		return (
			<li key={index}>
				<button className={planet.toLowerCase()} onClick={planetPick}>
					{planet}
					<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
						<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
					</svg>
				</button>
			</li>
		);
	});

	return (
		<>
			<header>
				<h1>the planets</h1>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
						<g fill="#FFF" fillRule="evenodd">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</button>
				<ul>{planetListRender}</ul>
			</header>
		</>
	);
}
