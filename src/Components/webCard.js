import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

export default function WebCard({ data }) {
	return (
		<Grid items xl={4} lg={3}>
			<Card sx={{ Width: '100px' }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="200"
						// width="190"
						image={data.img}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
