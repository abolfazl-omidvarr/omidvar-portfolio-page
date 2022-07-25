import React, { useState, useRef, useEffect } from "react";
export default function FooterLinks({ icon, link }) {
	return (
		<li>
			{icon}
			{link}
		</li>
	);
}
