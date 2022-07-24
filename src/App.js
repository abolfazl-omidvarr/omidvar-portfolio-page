import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import ParticleBackground from "./Components/particles";
import WebCard from "./Components/webCard";
import { Grid } from "@mui/material";
import colorPallet from "./media/colorPallet.png";
import spaceT from "./media/spaceT.png";
import bankistApp from "./media/bankistApp.png";
import bankistWeb from "./media/bankistWeb.png";
import mapty from "./media/mapty.png";
import sneakers from "./media/sneakers.png";
import pg from "./media/pg.png";
import gn from "./media/gn.png";
import mf from "./media/mf.png";
const CardContainer = styled.div`
	--scrollbar-width: 8px;
	--mask-height: 32px;
	overflow-y: auto;
	height: 92%;
	padding-bottom: var(--mask-height);
	padding-top: var(--mask-height);
	--mask-image-content: linear-gradient(
		to bottom,
		transparent,
		black var(--mask-height),
		black calc(100% - var(--mask-height)),
		transparent
	);
	--mask-size-content: calc(100% - var(--scrollbar-width)) 100%;
	--mask-image-scrollbar: linear-gradient(black, black);
	--mask-size-scrollbar: var(--scrollbar-width) 100%;
	mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
	mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
	mask-position: 0 0, 100% 0;
	mask-repeat: no-repeat, no-repeat;
`;
const cardData = [
	{
		img: colorPallet,
		text: {
			name: "Color Pallet",
			desc: "a beautiful color pallet creator that helps designers to create their own pallets and save their favorite colors",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,{" "}
					<span style={{ color: "pink" }}>JSS</span>,{" "}
					<span style={{ color: "green" }}>React.js</span>
				</span>
			),
		},
	},
	{
		img: spaceT,
		text: {
			name: "Space Tourism",
			desc: "an elegant multi-page space web site. are you ready to explore our solar system? fasten your seatbelt then :)",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: bankistApp,
		text: {
			name: "Bankist App",
			desc: "did you register to bankist? this is its efficient banking app. keep track of your expenses and pay up your loan. come have a look arround.",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: bankistWeb,
		text: {
			name: "Bankist Web Page",
			desc: "are you looking for a reliable and modern banking system? have a look at our web page. you will not regret it",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: mapty,
		text: {
			name: "MAPTY",
			desc: "this little web application helps and keep track of distances you ran or cycled and will keep yor data even if you close the page",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: sneakers,
		text: {
			name: "eCommerce single page",
			desc: "are you tired of looking for sneakers? try this one. sure it fits you perfectly and comes with a reasonable price?",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: pg,
		text: {
			name: "Pig Game",
			desc: "bored? play this game with your friend. let's see who's the luckiest.go and enjoy. winner takes all",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: gn,
		text: {
			name: "Guess the Number",
			desc: "don't have any friends to play pig games? no worries, guess the number and keep yourself busy ",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
	{
		img: mf,
		text: {
			name: "Color Pallet",
			desc: "enjoy the scenery of a plane, high up in the sky. made with bunch of PNGs and pure js animation",
			techs: (
				<span
					style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}
				>
					<span style={{ color: "#B50000" }}>HTML</span>,
					<span style={{ color: "pink" }}>CSS</span>,
					<span style={{ color: "yellow" }}> JS</span>
				</span>
			),
		},
	},
];
export default function App(props) {
	return (
		<div style={{ width: "100%", height: "100%" }} className="App">
			<ParticleBackground />
			<CardContainer
				style={{
					maxWidth: "1200px",
					height: "90%",
					overflowY: "scroll",
					margin: "auto",
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "1rem",
						padding: "1rem",
					}}
				>
					{cardData.map((data) => (
						<WebCard data={data} />
					))}
				</div>
			</CardContainer>
		</div>
	);
}
