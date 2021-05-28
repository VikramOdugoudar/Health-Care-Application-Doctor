import React from "react";
import { Card } from "react-bootstrap";
import "../styles/doctorCard.css";
const ProfileCard = ({ text1, text2, numbers1, numbers2 }) => {
	return (
		<div className="mt-3 d-flex flex-row">
			<Card className="details-card" style={{ textAlign: "center" }}>
				<p>{text1}</p>
				<h4>{numbers1}</h4>
			</Card>
			<Card className="details-card ml-3" style={{ textAlign: "center" }}>
				<p>{text2}</p>
				<h4>{numbers2}</h4>
			</Card>
		</div>
	);
};

export default ProfileCard;
