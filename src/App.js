import React, { useState, useRef, useEffect } from "react";
import ParticleBackground from "./Components/particles";
import WebCard from "./Components/webCard";
import { Grid } from "@mui/material";
import colorPallet from "./media/colorPallet.png";
import spaceT from "./media/spaceT.png";
import bankistApp from "./media/bankistApp.png";
import bankistWeb from "./media/bankistWeb.png";
import mapty from "./media/pg.png";
import sneakers from "./media/sneakers.png";
import pg from "./media/pg.png";
import gn from "./media/gn.png";
import mf from "./media/mf.png";

const cardData = [
	{
		img: colorPallet,
		text: {},
	},
	{
		img: spaceT,
		text: {},
	},
	{
		img: bankistApp,
		text: {},
	},
	{
		img: bankistWeb,
		text: {},
	},
	{
		img: mapty,
		text: {},
	},
	{
		img: sneakers,
		text: {},
	},
	{
		img: pg,
		text: {},
	},
	{
		img: gn,
		text: {},
	},
	{
		img: mf,
		text: {},
	},
];
export default function App(props) {
	return (
		<div>
			<div style={{ width: "100%", height: "100%" }} className="App">
				{/* <ParticleBackground /> */}
				<div
					style={{
						backgroundColor: "green",
						// maxWidth: "1200px",
						height: "9%",
						overflowY: "scroll",
						margin: "auto",
					}}
				>
					<Grid
						sx={{
							justifyContent: "center",
							justifyItems: "center",
						}}
						container
						spacing={2}
					>
						{cardData.map((data) => (
							<WebCard data={data} />
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
}
