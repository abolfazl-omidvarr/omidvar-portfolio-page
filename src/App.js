import React, { useState, useRef, useEffect } from "react";
import ParticleBackground from "./Components/particles";
import WebCard from "./Components/webCard";
import { Grid } from "@mui/material";
export default function App(props) {
	return (
		<div>
			<div style={{ width: "100%", height: "100%" }} className="App">
				<ParticleBackground />
				<Grid container spacing={2}>
					<WebCard />
					<WebCard />
					<WebCard />
				</Grid>
			</div>
		</div>
	);
}
