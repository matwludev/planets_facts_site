import planetsData from "../data/data.json";
import { useState } from "react";
export default function Header({ setSelectedPlanet }) {
	let planetList = [];
	const [showMenu, setShowMenu] = useState("menu");

	planetsData.forEach((pl) => {
		planetList.push(pl.name);
	});

	const [activePlanet, setActivePlanet] = useState([
		"active",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	function planetPick(e) {
		setSelectedPlanet(e.target.innerText);
		if (e.target.innerText.toLowerCase() === "mercury") {
			setActivePlanet(["active", "", "", "", "", "", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "venus") {
			setActivePlanet(["", "active", "", "", "", "", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "earth") {
			setActivePlanet(["", "", "active", "", "", "", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "mars") {
			setActivePlanet(["", "", "", "active", "", "", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "jupiter") {
			setActivePlanet(["", "", "", "", "active", "", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "saturn") {
			setActivePlanet(["", "", "", "", "", "active", "", ""]);
		} else if (e.target.innerText.toLowerCase() === "uranus") {
			setActivePlanet(["", "", "", "", "", "", "active", ""]);
		} else if (e.target.innerText.toLowerCase() === "neptune") {
			setActivePlanet(["", "", "", "", "", "", "", "active"]);
		}
	}
	function toggleActiveMenu() {
		showMenu === "menu" ? setShowMenu("menu open") : setShowMenu("menu");
	}
	const planetListRender = planetList.map((planet, index) => {
		return (
			<li key={index} onClick={toggleActiveMenu}>
				<button
					className={`${planet.toLowerCase()} ${activePlanet[index]}`}
					onClick={planetPick}>
					{planet}
				</button>
			</li>
		);
	});

	return (
		<>
			<header>
				<h1>the planets</h1>
				<button className="hamburger" onClick={toggleActiveMenu}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
						<g fill="#FFF" fillRule="evenodd">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</button>
				<ul className={showMenu}>{planetListRender}</ul>
			</header>
		</>
	);
}
