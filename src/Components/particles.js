import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground(props) {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div style={{ position: "absolute", zIndex: "-1" }}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "#1e1b1b",
						},
					},
					fpsLimit: 90,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "grab",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							grab: {
								distance: 150,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 140,
							enable: true,
							opacity: 0.5,
							width: 0.5,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: true,
							speed: 0.5,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 120,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 1 },
						},
					},
					detectRetina: false,
				}}
			/>
		</div>
	);
}
