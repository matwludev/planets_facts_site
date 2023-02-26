import planetsData from "../data/data.json";
import { useState } from "react";

export default function Main({ selectedPlanet }) {
	let planetD = planetsData[0];
	const [contentType, setContentType] = useState("overview");

	let contentT = planetD.overview;

	switch (selectedPlanet) {
		case "MERCURY":
			planetD = planetsData[0];
			break;
		case "VENUS":
			planetD = planetsData[1];
			break;
		case "EARTH":
			planetD = planetsData[2];
			break;
		case "MARS":
			planetD = planetsData[3];
			break;
		case "JUPITER":
			planetD = planetsData[4];
			break;
		case "SATURN":
			planetD = planetsData[5];
			break;
		case "URANUS":
			planetD = planetsData[6];
			break;
		case "NEPTUNE":
			planetD = planetsData[7];
			break;
		default:
			break;
	}

	const [activeType, setActiveType] = useState(["active", "", ""]);
	function contentPick(e) {
		setContentType(e.target.innerText);
		if (
			e.target.innerText.toLowerCase() === "overview" ||
			e.target.innerText.toLowerCase() === "01 overview"
		) {
			setActiveType(["active", "", ""]);
		} else if (
			e.target.innerText.toLowerCase() === "structure" ||
			e.target.innerText.toLowerCase() === "02 internal structure"
		) {
			setActiveType(["", "active", ""]);
		} else if (
			e.target.innerText.toLowerCase() === "surface" ||
			e.target.innerText.toLowerCase() === "03 surface geology"
		) {
			setActiveType(["", "", "active"]);
		}
	}

	switch (contentType.toLowerCase()) {
		case "overview":
			contentT = planetD.overview;
			break;
		case "01 overview":
			contentT = planetD.overview;
			break;
		case "structure":
			contentT = planetD.structure;

			break;
		case "02 internal structure":
			contentT = planetD.structure;

			break;
		case "surface":
			contentT = planetD.geology;

			break;
		case "03 surface geology":
			contentT = planetD.geology;

			break;
		default:
			break;
	}
	function ImageRender() {
		if (
			contentType.toLowerCase() === "overview" ||
			contentType.toLowerCase() === "01 overview"
		) {
			return (
				<div className={`image ${selectedPlanet.toLowerCase()} overview`}></div>
			);
		} else if (
			contentType.toLowerCase() === "structure" ||
			contentType.toLowerCase() === "02 internal structure"
		) {
			return (
				<div
					className={`image ${selectedPlanet.toLowerCase()} structure`}></div>
			);
		} else if (
			contentType.toLowerCase() === "surface" ||
			contentType.toLowerCase() === "03 surface geology"
		) {
			return (
				<div className={`image ${selectedPlanet.toLowerCase()} overview`}>
					<img
						src={require(`../assets/geology-${selectedPlanet.toLowerCase()}.png`)}
						alt="planet geology"></img>
				</div>
			);
		}
	}

	return (
		<>
			<main>
				<nav className="nav-mobile">
					<ul>
						<li className={`${selectedPlanet.toLowerCase()} ${activeType[0]}`}>
							<button onClick={contentPick}>overview</button>
						</li>
						<li className={`${selectedPlanet.toLowerCase()} ${activeType[1]}`}>
							<button onClick={contentPick}>structure</button>
						</li>
						<li className={`${selectedPlanet.toLowerCase()} ${activeType[2]}`}>
							<button onClick={contentPick}>surface</button>
						</li>
					</ul>
				</nav>
				<ImageRender />
				<div className="planetInformations">
					<div className="infroWrapper">
						<h2>{selectedPlanet}</h2>
						<p>{contentT.content}</p>
						<span>
							Source:
							<a href={contentT.source} target="_blank" rel="noreferrer">
								Wikipedia
							</a>
						</span>
					</div>
					<nav className="nav-tabletDesktop">
						<ul>
							<li
								className={`${selectedPlanet.toLowerCase()} ${activeType[0]}`}>
								<button onClick={contentPick}>
									<span>01</span> overview
								</button>
							</li>
							<li
								className={`${selectedPlanet.toLowerCase()} ${activeType[1]}`}>
								<button onClick={contentPick}>
									<span>02</span> internal structure
								</button>
							</li>
							<li
								className={`${selectedPlanet.toLowerCase()} ${activeType[2]}`}>
								<button onClick={contentPick}>
									<span>03</span> surface geology
								</button>
							</li>
						</ul>
					</nav>
				</div>
				<div className="planetNumbers">
					<div>
						<h3>rotation time</h3>
						<p>{planetD.rotation}</p>
					</div>
					<div>
						<h3>revolution time</h3>
						<p>{planetD.revolution}</p>
					</div>
					<div>
						<h3>radius</h3>
						<p>{planetD.radius}</p>
					</div>
					<div>
						<h3>average temp.</h3>
						<p>{planetD.temperature}</p>
					</div>
				</div>
			</main>
		</>
	);
}
