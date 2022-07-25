import React, { useState, useRef, useEffect } from "react";
import FooterLinks from "./footerLinks";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterDiv = styled.div((props) => ({
	position: "absolute",
	bottom: 0,
	width: "100%",
	height: "11%",
	color: "#fff",
	backgroundColor: "rgba(58,5,34,0.90)",
	gridTemplateColumns: "1fr 1fr ",
	alignItems: "center",
	display: "grid",
	transition: "transform 0.5s",
	transform: props.show ? "translate(0)" : "translate(0%,100%)",
	"& .footerLeft": {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		gap: "0.1rem",
	},
	"& .footerRight": {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		"& .socialIcon": {
			"& svg": {
				fontSize: "3rem",
			},
		},
		"& .footerLinks": {
			display: "flex",
			alignItems: "center",
			"& a": {
				textDecoration: "none",
				color: "#fff",
			},
		},
		"& .footerRight-left": {
			display: "flex",
			justifyContent: "center",
			gap: "1rem",
		},
		"& .footerRight-right": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			gap: "1rem",
		},
	},
	"@media (max-width:600px)": {
		height: "30%",
		gridTemplateColumns: "1fr",
		padding: "0rem 0rem 0rem 0rem",
		"& .footerRight": {
			display: "grid",
			gridTemplateColumns: "1fr",
			"& .socialIcon": {
				"& svg": {
					fontSize: "2rem",
				},
			},
			"& .footerRight-right": {
				justifyContent: "center",
				alignItems: "center",
				gap: "0rem",
			},
		},
	},
}));
const FooterButton = styled.button((props) => ({
	position: "absolute",
	padding: "0.5rem 1.5rem",
	backgroundColor: "#e3e4e7",
	borderRadius: "14px 14px 0 0",
	border: "none",
	left: "50%",
	transform: "translate(-50%,-220%)",
	cursor: "pointer",
	transition: "all 0.2s",
	zIndex: "-2",
	boxShadow:
		"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
	"&:active": {
		backgroundColor: "#a1a1a5",
	},
	'@media(max-width:600px)':{
		transform: "translate(-50%,-510%)",
	}
}));
export default function Footer(props) {
	const [show, setShow] = useState(true);
	const footerRef = useRef();
	return (
		<FooterDiv ref={footerRef} show={show} className="Footer">
			<FooterButton onClick={() => setShow(!show)}>
				{show ? "▼" : "▲"}
			</FooterButton>
			<div className="footerLeft">
				<h1>Abolfazl Omidvar</h1>
				<p>Web development enthusiastic</p>
				<p>Check out my personal projects here</p>
			</div>
			<div className="footerRight">
				<div className="footerRight-left">
					<p className="footerLinks socialIcon">
						<a href="https://github.com/abolfazl-omidvarr">
							<GitHubIcon />
						</a>
					</p>
					<p className="footerLinks socialIcon">
						<a href="https://www.linkedin.com/in/abolfazl-omidvar-74a450162">
							<LinkedInIcon />
						</a>
					</p>
				</div>
				<div className="footerRight-right">
					<p className="footerLinks">
						<EmailIcon /> : abolfazl.omidvar44@gmail.com
					</p>
					<p className="footerLinks">
						<LocalPhoneIcon />: +989210710380
					</p>
				</div>
			</div>
		</FooterDiv>
	);
}
