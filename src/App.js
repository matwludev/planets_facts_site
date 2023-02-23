import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
	const [selectedPlanet, setSelectedPlanet] = useState("Mercury");
	return (
		<>
			<Header setSelectedPlanet={setSelectedPlanet} />
			<Main selectedPlanet={selectedPlanet} />
		</>
	);
}
