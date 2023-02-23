import planetsData from "../data/data.json";
import { useState } from "react";
export default function Header({ setSelectedPlanet }) {
	let planetList = [];
	const [showMenu, setShowMenu] = useState("menu");
	planetsData.forEach((pl) => {
		planetList.push(pl.name);
	});

	function planetPick(e) {
		setSelectedPlanet(e.target.innerText);
	}
	function toggleActiveMenu() {
		showMenu === "menu" ? setShowMenu("menu open") : setShowMenu("menu");
	}
	const planetListRender = planetList.map((planet, index) => {
		return (
			<li key={index} onClick={toggleActiveMenu}>
				<button className={planet.toLowerCase()} onClick={planetPick}>
					{planet}
				</button>
			</li>
		);
	});

	return (
		<>
			<header>
				<h1>the planets</h1>
				<button onClick={toggleActiveMenu}>
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
