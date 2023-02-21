import planetsData from "../data/data.json";
import { useState } from "react";

export default function Main({ selectedPlanet, imagePlanet }) {
	let planetD = planetsData[0];
	const [contentType, setContentType] = useState("overview");
	let test = planetD.overview;

	switch (selectedPlanet) {
		case "Venus":
			planetD = planetsData[1];
			break;
		case "Earth":
			planetD = planetsData[2];
			break;
		case "Mars":
			planetD = planetsData[3];
			break;
		case "Jupiter":
			planetD = planetsData[4];
			break;
		case "Saturn":
			planetD = planetsData[5];
			break;
		case "Uranus":
			planetD = planetsData[6];
			break;
		case "Neptune":
			planetD = planetsData[7];
			break;
		default:
			break;
	}
	function contentPick(e) {
		setContentType(e.target.innerText);
	}

	switch (contentType) {
		case "overview":
			test = planetD.overview;
			break;
		case "structure":
			test = planetD.structure;
			break;
		case "internal structure":
			test = planetD.structure;
			break;
		case "surface":
			test = planetD.geology;
			break;
		case "surface geology":
			test = planetD.geology;
			break;
		default:
			break;
	}

	return (
		<>
			<main>
				<nav>
					<ul>
						<li>
							<button onClick={contentPick}>overview</button>
						</li>
						<li>
							<button onClick={contentPick}>structure</button>
						</li>
						<li>
							<button onClick={contentPick}>surface</button>
						</li>
					</ul>
				</nav>
				<div className={selectedPlanet.toLowerCase()}>
					{(contentType === "surface" || contentType === "surface geology") && (
						<img
							src={require(`../assets/geology-${selectedPlanet.toLowerCase()}.png`)}
							alt="planet geology"></img>
					)}
				</div>
				<div>
					<div>
						<h2>{selectedPlanet}</h2>
						<p>{test.content}</p>
						<span>
							Source:
							<a href={test.source} target="_blank" rel="noreferrer">
								Wikipedia
							</a>
						</span>
					</div>
					<div>
						<nav>
							<ul>
								<li>
									<button onClick={contentPick}>overview</button>
								</li>
								<li>
									<button onClick={contentPick}>internal structure</button>
								</li>
								<li>
									<button onClick={contentPick}>surface geology</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div>
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
