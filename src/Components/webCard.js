import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function WebCard({ data }) {
	return (
		<Card
			sx={{
				width: "100%",
				padding: "0.25rem",
				backgroundColor: "#595e69",
				borderRadius: "12px",
				transition: "transform 0.2s",
				"&:hover": { transform: "scale(1.04)" },
			}}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={data.img}
					alt="green iguana"
					sx={{
						borderRadius: "12px",
						transition: "transform 0.2s",
						boxShadow:
							"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px,rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
						"&:hover": { transform: "scale(1.01)" },
					}}
				/>
				<CardContent>
					<Typography
						sx={{ fontSize: "1.1rem", fontWeight: "bolder" }}
						gutterBottom
						component="div"
					>
						{data.text.name}
					</Typography>
					<Typography variant="body2" color="#e3e4e7">
						{data.text.desc}
					</Typography>
					<Typography gutterBottom variant="body2" color="#e3e4e7">
						{data.text.techs}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
