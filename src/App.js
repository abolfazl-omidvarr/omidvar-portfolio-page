import React, { useState, useRef, useEffect } from "react";
import ParticleBackground from "./Components/particles";
export default function App(props) {
	return (
		<div style={{ width: "100%", height: "100%" }} className="App">
			<ParticleBackground />
		</div>
	);
}
