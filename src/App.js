import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import ParticleBackground from "./Components/particles";
import WebCard from "./Components/webCard";
import Footer from "./Components/footer";
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
	max-width: 1200px;
	height: 88%;
	overflow-y: scroll;
	margin: auto;
	--scrollbar-width: 8px;
	--mask-height: 32px;
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
	@media (max-width: 600px) {
		height: 95%;
	}
`;
const CardInnerContainer = styled.div((props) => ({
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gap: "1rem",
	padding: "1rem",
	"@media (max-width:900px)": {
		gridTemplateColumns: "1fr 1fr",
	},
	"@media (max-width:600px)": {
		gridTemplateColumns: "1fr",
		padding: "0rem 3rem 0rem 3rem",
	},
}));
const tech = (
	<span style={{ fontFamily: '"Changa", sans-serif', fontSize: "1.5rem" }}>
		<span style={{ color: "#B50000" }}>HTML</span>,
		<span style={{ color: "pink" }}>CSS</span>,
		<span style={{ color: "yellow" }}> JS</span>
	</span>
);
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
		netlify: true,
		location: "https://colorpallet.netlify.app",
	},
	{
		img: spaceT,
		text: {
			name: "Space Tourism",
			desc: "an elegant multi-page space web site. are you ready to explore our solar system? fasten your seatbelt then",
			techs: tech,
		},
		netlify: true,
		location: "https://sapce-tourism.netlify.app",
	},
	{
		img: mapty,
		text: {
			name: "MAPTY",
			desc: "this little web application helps and keep track of distances you ran or cycled. it will come in handy",
			techs: tech,
		},
		netlify: true,
		location: "https://mapty-responsive.netlify.app",
	},
	{
		img: sneakers,
		text: {
			name: "eCommerce single page",
			desc: "are you tired of looking for sneakers? try this one. sure it fits you perfectly and comes with a reasonable price?",
			techs: tech,
		},
		netlify: true,
		location: "https://ecommerce-omidvar.netlify.app",
	},
	{
		img: bankistApp,
		text: {
			name: "Bankist App",
			desc: "did you register to bankist? keep track of your expenses and pay up your loan. come have a look arround.",
			techs: tech,
		},
		netlify: false,
		location: "/site/bankist/bankist-app",
	},
	{
		img: bankistWeb,
		text: {
			name: "Bankist Web Page",
			desc: "are you looking for a reliable and modern banking system? have a look at our web page. you will not regret it",
			techs: tech,
		},
		netlify: false,
		location: "/site/bankist/bankist-web",
	},
	{
		img: pg,
		text: {
			name: "Pig Game",
			desc: "bored? play this game with your friend. let's see who's the luckiest.go and enjoy. winner takes all",
			techs: tech,
		},
		netlify: false,
		location: "/site/pig-game",
	},
	{
		img: gn,
		text: {
			name: "Guess the Number",
			desc: "don't have any friends to play pig games? no worries, guess the number and keep yourself busy ",
			techs: tech,
		},
		netlify: false,
		location: "/site/guess-the-number",
	},
	{
		img: mf,
		text: {
			name: "Moving Frame",
			desc: "enjoy the scenery of a plane, high up in the sky. made with bunch of PNGs and pure js animation",
			techs: tech,
		},
		netlify: false,
		location: "/site/moving-frame",
	},
];
export default function App(props) {
	return (
		<div style={{ width: "100%", height: "100%" }} className="App">
			<ParticleBackground />
			<CardContainer>
				<CardInnerContainer>
					{cardData.map((data) => (
						<WebCard data={data} ket={data.location} />
					))}
				</CardInnerContainer>
			</CardContainer>
			<Footer />
		</div>
	);
}
