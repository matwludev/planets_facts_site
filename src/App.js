import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
	const [selectedPlanet, setSelectedPlanet] = useState("Mercury");
	const [imagePlanet, setImagePlanet] = useState("mercury overview");
	return (
		<>
			<Header
				setSelectedPlanet={setSelectedPlanet}
				setImagePlanet={setImagePlanet}
			/>
			<Main selectedPlanet={selectedPlanet} imagePlanet={imagePlanet} />
		</>
	);
}
