import React from "react";
import { Card } from "react-bootstrap";
import "../styles/doctorCard.css";
const ProfileDataCard = ({ text1, numbers1, text2, numbers2 }) => {
	return (
		<div className="mt-3 d-flex flex-row flexMe">
			<Card
				className="details-card createSpace "
				style={{ textAlign: "center" }}
			>
				<p>{text1}</p>
				<h4>{numbers1}</h4>
				<span>pouches</span>
			</Card>
			<Card
				className="details-card createSpace"
				style={{ textAlign: "center" }}
			>
				<p>{text2}</p>
				<h4>{numbers2}</h4>
				<span>pouches</span>
			</Card>
		</div>
	);
};

export default ProfileDataCard;
