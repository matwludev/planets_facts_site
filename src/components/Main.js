import planetsData from "../data/data.json";
export default function Main() {
	return (
		<>
			<main>
				<nav>
					<ul>
						<li>
							<button>overview</button>
						</li>
						<li>
							<button>structure</button>
						</li>
						<li>
							<button>surface</button>
						</li>
					</ul>
				</nav>
				<div className="mercury"></div>
				<div>
					<div>
						<h2>{planetsData[0].name}</h2>
						<p>{planetsData[0].overview.content}</p>
						<span>
							Source:
							<a href={planetsData[0].overview.source}>Wikipedia</a>
						</span>
					</div>
					<div>
						<nav>
							<ul>
								<li>
									<button>overview</button>
								</li>
								<li>
									<button>internal structure</button>
								</li>
								<li>
									<button>surface geology</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div>
					<div>
						<h3>rotation time</h3>
						<p>{planetsData[0].rotation}</p>
					</div>
					<div>
						<h3>revolution time</h3>
						<p>{planetsData[0].revolution}</p>
					</div>
					<div>
						<h3>radius</h3>
						<p>{planetsData[0].radius}</p>
					</div>
					<div>
						<h3>average temp.</h3>
						<p>{planetsData[0].temperature}</p>
					</div>
				</div>
			</main>
		</>
	);
}
